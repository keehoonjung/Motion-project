import { BaseComponent } from "../../base.js";

export class DialogInputItem extends BaseComponent<HTMLElement> {
  constructor(title: string, item: string) {
    super(`
          <div class="popup__input">
              <div class="popup__title">
                  <h2 class="popup__title__text">Title</h2>
                  <input type="text" class="title" />
              </div>
            <div class="popup__item">
                <h2 class="popup__item__text"></h2>
                <input type="text" class="popup__item__input" />
            </div>
          </div>
        `);