import { BaseComponent } from "../base.js";
import { PageItemComponent } from "./pageitem.js";
export class PageComponets extends BaseComponent<HTMLUListElement> {
  constructor() {
    super(`<ul class="page">Hello world</ul>`);

    const imageComponent = new PageItemComponent("imgae");
    imageComponent.attachTo(this.element, "beforeend");

    const video = new PageItemComponent("video");
    video.attachTo(this.element, "beforeend");

    const todo = new PageItemComponent("imgae");
    image.attachTo(this.element, "beforeend");

    const image = new PageItemComponent("imgae");
    image.attachTo(this.element, "beforeend");
  }
}
