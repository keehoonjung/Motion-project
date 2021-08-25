<<<<<<< HEAD
import { BaseComponet } from "../base.js";

export class PageComponent extends BaseComponet<HTMLUListElement> {
  private element: HTMLUListElement;
  constructor() {
    super('<ul class="page">Hello world</ul>');
=======
import { BaseComponent } from "../base.js";

export class PageComponets extends BaseComponent<HTMLUListElement> {
  constructor() {
    super(`<ul class="page">Hello world</ul>`);
>>>>>>> 8e96661 (componnents refactoring)
  }
}
