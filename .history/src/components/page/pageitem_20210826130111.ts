import { BaseComponent } from "../base.js";
import { ImageComponent } from './item/image.js';

export class PageItemComponents extends BaseComponent<HTMLLIElement> {
  constructor(Item: ImageComponent) {
    super(`
        <li class="page__item">
            <button class="item__deletebtn">
                <i class="fas fa-times"> </i>
            </button>
         </li>
        `);

    const component = new Item("ss", 'ss');
    component.
  }
}
