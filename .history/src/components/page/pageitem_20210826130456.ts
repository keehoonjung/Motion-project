import { BaseComponent } from "../base.js";
import { ImageComponent } from "./item/image.js";

export class PageItemComponent extends BaseComponent<HTMLLIElement> {
  constructor(type: string) {
    super(`
        <li class="page__item">
            <button class="item__deletebtn">
                <i class="fas fa-times"> </i>
            </button>
         </li>
        `);

    switch (type) {
      case "image":
        const item = new ImageComponent(
          "image Title",
          "https://picsum.photos/200/300"
        );
    }
  }
}
