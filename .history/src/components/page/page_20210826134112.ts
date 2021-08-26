import { BaseComponent, Component } from "../base.js";

interface Composer {
  addchild(child: Component): void;
}
class PageItemComponent
  extends BaseComponent<HTMLLIElement>
  implements Composer
{
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
  }

  addchild(child: Component) {
    const container = this.element.querySelector(
      ".page-item__body"
    )! as HTMLElement;
    child.attachTo(container, "beforeend");
  }
}

export class PageComponets
  extends BaseComponent<HTMLUListElement>
  implements Composer
{
  constructor() {
    super(`<ul class="page"></ul>`);
  }

  addchild(section: Component) {
    const item = new PageItemComponent();
    item.addchild(section);
    item.attachTo(this.element, "beforeend");
  }
}
