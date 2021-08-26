import { BaseComponent, Component } from "../base.js";
import { ImageComponent } from "./item/image.js";

export interface Composer {
  addchild(child: Component): void;
}

type OnCloseLister = () => void;
class PageItemComponent
  extends BaseComponent<HTMLLIElement>
  implements Composer
{
  private closeListener?: OnCloseLister;

  constructor() {
    super(`
        <li class="page-item">
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
  ItemComponent: Component & Composer;
  constructor(ItemComponent: Component & Composer) {
    super(`<ul class="page"></ul>`);
    this.ItemComponent = ItemComponent;
  }

  addchild(section: Component) {
    this.ItemComponent.addchild(section);
    this.ItemComponent.attachTo(this.element, "beforeend");
    this.ItemComponent.setOnCloseListner(() => {
      this.ItemComponent.removeFrom(this.element);
    });
  }
}
