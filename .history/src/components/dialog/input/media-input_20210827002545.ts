import { BaseComponent } from "../../base.js";
import { MediaData } from "../dialog.js";

export class MediaSectionInput
  extends BaseComponent<HTMLElement>
  implements MediaData
{
  constructor() {
    super(`
          <div>
              <div class="form__container">
                  <h2 class="popup__title__text">Title</h2>
                  <input type="text" id="title" />
              </div>
            <div class="form__container">
                <h2 class="popup__item__text">Url</h2>
                <textarea type="text" id="url" rows="3" />
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
