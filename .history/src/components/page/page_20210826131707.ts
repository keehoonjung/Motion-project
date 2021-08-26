import { BaseComponent } from "../base.js";
import { PageItemComponent } from "./pageitem.js";
export class PageComponets extends BaseComponent<HTMLUListElement> {
  constructor() {
    super(`<ul class="page">Hello world</ul>`);

    const imageComponent = new PageItemComponent("image");
    imageComponent.attachTo(this.element, "beforeend");

    const videoComponent = new PageItemComponent("video");
    videoComponent.attachTo(this.element, "beforeend");

    const todoComponent = new PageItemComponent("todo");
    todoComponent.attachTo(this.element, "beforeend");

    const noteComponent = new PageItemComponent("note");
    noteComponent.attachTo(this.element, "beforeend");
  }
}
