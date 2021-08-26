import { BaseComponent } from "../../base.js";

class DialogInputItem extends BaseComponent<HTMLElement> {
  constructor(title: string, item: string) {
    super(`
        <div class="popup__title">
        <h2 class="popup__title__text">Title</h2>
        <input type="text" class="popup__title__input" />
      </div>
      <div class="popup__title">
        <h2 class="popup__url__text">URL</h2>
        <input type="text" class="popup__item__input" />
      </div>
        `);
  }
}
