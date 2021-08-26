import { BaseComponent } from "../../base.js";

export class DialogInputItem extends BaseComponent<HTMLElement> {
  constructor() {
    super(`
          <div>
              <div class="form__container">
                  <h2 class="popup__title__text">Title</h2>
                  <input type="text" id="title" />
              </div>
            <div class="form__container">
                <h2 class="popup__item__text">Url</h2>
                <input type="text" id="url" />
            </div>
          </div>
        `);
  }
}
