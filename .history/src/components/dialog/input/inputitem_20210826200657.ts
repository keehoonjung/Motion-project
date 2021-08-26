import { BaseComponent } from "../../base.js";

export class DialogInputItem extends BaseComponent<HTMLElement> {
  constructor(title: string, item: string) {
    super(`
          <section class="popup__input>
              <div class="popup__title">
                  <h2 class="popup__title__text"></h2>
                  <input type="text" class="popup__title__input" />
            </div>
            <div class="popup__item">
                <h2 class="popup__item__text"></h2>
                <input type="text" class="popup__item__input" />
            </div>
          </section>
        `);
    console.log(this.element);

    const popupTitle = this.element.querySelector(
      ".popup__title__text"
    )! as HTMLHeadingElement;
    popupTitle.textContent = title;

    const popupItem = this.element.querySelector(
      ".popup__item__text"
    )! as HTMLHeadingElement;
    popupItem.textContent = item;
  }

  submitTitleInputValue() {
    const popupTitleInput = this.element.querySelector(
      ".popup__title__input"
    )! as HTMLInputElement;
    return popupTitleInput.value;
  }

  submitItemInputValue() {
    const popupItemInput = this.element.querySelector(
      ".popup__item__input"
    )! as HTMLInputElement;
    return popupItemInput.value;
  }
}
