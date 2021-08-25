import { BaseComponet } from "../base.js";

export class PageComponent extends BaseComponet<HTMLUListElement> {
  private element: HTMLUListElement;
  constructor() {
    super('<ul class="page">Hello world</ul>');
  }
}
