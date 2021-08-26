import { BaseComponent } from "../../base.js";

export interface MediaData {
  readonly title: string;
  readonly url: string;
}

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
  get title(): string {
    const element = this.element.querySelector("#title")! as HTMLInputElement;
    return element.value;
  }

  get url(): string {
    const element = this.element.querySelector("#url")! as HTMLInputElement;
    return element.value;
  }
}
