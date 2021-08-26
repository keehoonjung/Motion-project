import { BaseComponent } from "../base.js";
import { PageItemComponent } from "./pageitem.js";
export class PageComponets extends BaseComponent<HTMLUListElement> {
  constructor() {
    super(`<ul class="page">Hello world</ul>`);

    const image = new PageItemComponent("imgae");
    image.attachTo(this.element, "beforeend");
  }
}
