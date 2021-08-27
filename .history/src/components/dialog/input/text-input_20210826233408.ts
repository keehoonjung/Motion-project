import { BaseComponent } from "../../base.js";

export class TextSectionInput extends BaseComponent<HTMLElement> {
  constructor() {
    super(`
          <div>
              <div class="form__container">
                  <h2 class="popup__title__text">Title</h2>
                  <input type="text" id="title" />
              </div>
            <div class="form__container">
                <h2 class="popup__item__text">Url</h2>
                <input type="text" id="body" />
            </div>
          </div>
        `);
  }
  get title(): string {
    const element = this.element.querySelector("#title")! as HTMLInputElement;
    return element.value;
  }

  get body(): string {
    const element = this.element.querySelector("#body")! as HTMLInputElement;
    return element.value;
  }
}