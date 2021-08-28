import { BaseComponent, Component } from "../base.js";

export interface Composer {
  addchild(child: Component): void;
}

export interface SectionContainer extends Component, Composer {
  setOnCloseListner(listner: OnCloseLister): void;
  setOnDragStateListner(listner: DragStateListner<SectionContainer>): void;
  muteChildren(state: "mute" | "unmute"): void;
  getBoundingRect(): DOMRect;
  onDropped(): void;
}
type DragState = "start" | "end" | "leave" | "enter";
type OnCloseLister = () => void;
type DragStateListner<T extends Component> = (
  target: T,
  state: DragState
) => void;

type SectionContainerConstructor = {
  new (): SectionContainer;
};
export class PageItemComponent
  extends BaseComponent<HTMLLIElement>
  implements SectionContainer
{
  private closeListener?: OnCloseLister;
  private DragstateListner?: DragStateListner<PageItemComponent>;
  constructor() {
    super(`
        <li draggable="true" class="page-item">
            <section class="page-item__body"></section>
            <div class="page-item__controls">
                <button class="close">
                    <i class="fas fa-times"> </i>
                </button>
            </div>
        </li>
        `);
    const deleteBtn = this.element.querySelector(
      ".close"
    )! as HTMLButtonElement;
    deleteBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };

    this.element.addEventListener("dragstart", (event: DragEvent) => {
      this.onDragStart(event);
    });
    this.element.addEventListener("dragend", (event: DragEvent) => {
      this.onDragEnd(event);
    });
    this.element.addEventListener("dragleave", (event: DragEvent) => {
      this.onDragLeave(event);
    });
    this.element.addEventListener("dragenter", (event: DragEvent) => {
      this.onDragEnter(event);
    });
  }

  onDragStart(_: DragEvent) {
    this.notiyStateListner("start");
    this.element.classList.add("lifted");
  }
  onDragEnd(_: DragEvent) {
    this.notiyStateListner("end");
    this.element.classList.remove("lifted");
  }
  onDragEnter(_: DragEvent) {
    this.notiyStateListner("enter");
    this.element.classList.add("drop-area");
  }
  onDragLeave(_: DragEvent) {
    this.notiyStateListner("leave");
  }

  notiyStateListner(state: DragState) {
    this.DragstateListner && this.DragstateListner(this, state);
  }

  setOnDragStateListner(listner: DragStateListner<PageItemComponent>) {
    this.DragstateListner = listner;
  }

  addchild(child: Component) {
    const container = this.element.querySelector(
      ".page-item__body"
    )! as HTMLElement;
    child.attachTo(container, "beforeend");
  }

  setOnCloseListner(listner: OnCloseLister) {
    this.closeListener = listner;
  }

  muteChildren(state: "mute" | "unmute") {
    if (state === "mute") {
      this.element.classList.add("mute-child");
    } else {
      this.element.classList.remove("mute-child");
    }
  }

  getBoundingRect(): DOMRect {
    return this.element.getBoundingClientRect();
  }
}

export class PageComponets
  extends BaseComponent<HTMLUListElement>
  implements Composer
{
  private children = new Set<SectionContainer>();
  private dragtarget?: SectionContainer;
  private droptarget?: SectionContainer;

  constructor(private pageItemConstructor: SectionContainerConstructor) {
    super(`<ul class="page"></ul>`);

    this.element.addEventListener("drop", (event: DragEvent) => {
      this.onDrop(event);
      if (!this.droptarget) {
        return;
      } else if (this.dragtarget && this.dragtarget !== this.droptarget) {
        const dropY = event.clientY;
        const srcElement = this.dragtarget.getBoundingRect();
        this.droptarget.attach(
          this.dragtarget,
          dropY > srcElement.y ? "afterend" : "beforebegin"
        );
      }
    });
    this.element.addEventListener("dragover", (event: DragEvent) => {
      this.onDragOver(event);
    });
    this.droptarget.onDropped();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
  }
  onDragOver(event: DragEvent) {
    event.preventDefault();
    console.log("dragover!");
  }

  addchild(section: Component) {
    const item = new this.pageItemConstructor();
    item.addchild(section);
    item.attachTo(this.element, "beforeend");
    item.setOnCloseListner(() => {
      item.removeFrom(this.element);
      this.children.delete(item);
    });
    this.children.add(item);
    item.setOnDragStateListner((target: SectionContainer, state: DragState) => {
      switch (state) {
        case "start":
          this.dragtarget = target;
          this.updateSection("mute");
          break;
        case "end":
          this.dragtarget = undefined;
          this.updateSection("unmute");
          break;
        case "leave":
          this.droptarget = undefined;
          break;
        case "enter":
          this.droptarget = target;
          break;
      }
    });
  }

  private updateSection(state: "mute" | "unmute") {
    this.children.forEach((section: SectionContainer) => {
      section.muteChildren(state);
    });
  }
}
