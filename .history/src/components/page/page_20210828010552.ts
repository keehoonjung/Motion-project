import { BaseComponent, Component } from "../base.js";

export interface Composer {
  addchild(child: Component): void;
}

export interface SectionContainer extends Component, Composer {
  setOnCloseListner(listner: OnCloseLister): void;
}

type OnCloseLister = () => void;

type SectionContainerConstructor = {
  new (): SectionContainer;
};
export class PageItemComponent
  extends BaseComponent<HTMLLIElement>
  implements SectionContainer
{
  private closeListener?: OnCloseLister;

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
      this.onDrahEnd(event);
    });
  }

  onDragStart(event: DragEvent) {
    console.log(event, "hello");
  }
  onDrahEnd(event: DragEvent) {
    console.log(event, "hello");
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
  constructor(private pageItemConstructor: SectionContainerConstructor) {
    super(`<ul class="page"></ul>`);

    this.element.addEventListener("drop", (event: DragEvent) => {
      this.onDrop(event);
    });
    this.element.addEventListener("dragover", (event: DragEvent) => {
      this.onDragOver(event);
    });
  }

  onDrop(event: DragEvent) {
    console.log(event, "hello");
  }
  onDragOver(event: DragEvent) {
    console.log(event, "hello");
  }

  addchild(section: Component) {
    const item = new this.pageItemConstructor();
    item.addchild(section);
    item.attachTo(this.element, "beforeend");
    item.setOnCloseListner(() => {
      item.removeFrom(this.element);
    });
  }
}
