import { BaseComponent, Component } from "../base.js";

export interface Composer {
  addchild(child: Component): void;
}

export interface SectionContainer extends Component, Composer {
  setOnCloseListner(listner: OnCloseLister): void;
  setOnDragStateListner(listner: DragStateListner<SectionContainer>): void;
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
      this.onDragStart(event);
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
  }
  onDragEnd(_: DragEvent) {
    this.notiyStateListner("end");
  }
  onDragEnter(_: DragEvent) {
    this.notiyStateListner("enter");
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
        this.droptarget.attach(this.dragtarget, "beforebegin");
      }
    });
    this.element.addEventListener("dragover", (event: DragEvent) => {
      this.onDragOver(event);
    });
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
    this.children.add(this.element);
    item.setOnDragStateListner((target: SectionContainer, state: DragState) => {
      switch (state) {
        case "start":
          this.dragtarget = target;
          break;
        case "end":
          this.dragtarget = undefined;
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
}
