import { BaseComponent, Component } from "../base.js";

class PageItemComponent extends BaseComponent<HTMLLIElement> {
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

export class PageComponets extends BaseComponent<HTMLUListElement> {
  constructor() {
    super(`<ul class="page">Hello world</ul>`);
  }

  addchild(section: Component) {
    const item = new PageItemComponent();
    item.addchild(section);
    item.attachTo(this.element, "beforeend");
  }
}
