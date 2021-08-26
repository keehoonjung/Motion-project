import { BaseComponent } from "../base.js";

export class PageItemComponents extends BaseComponent<HTMLLIElement> {
  constructor(element: BaseComponent) {
    super(`
        <li class="page__item">
        <button class="item__deletebtn">
          <i class="fas fa-times"> </i>
        </button>
      </li>
        `);
  }
}
