import { BaseComponent } from "../../base.js";

export class DialogComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`
        <section class="popup">
            <button class="popup__exitbtn">
                <i class="fas fa-times"> </i>
            </button>
            <div class="popup__title">
                <h2 class="popup__title__text">Title</h2>
                <input type="text" class="popup__title__input" />
            </div>
            <div class="popup__title">
                <h2 class="popup__url__text">URL</h2>
                <input type="text" class="popup__item__input" />
            </div>
            <button class="popup__addbtn">ADD</button>
        </section>
        `);

    const exitBtn = this.element.querySelector(
      ".popup__exitbtn"
    )! as HTMLButtonElement;
  }
}
