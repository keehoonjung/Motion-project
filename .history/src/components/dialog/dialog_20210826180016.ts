import { BaseComponent } from "../base.js";

export class DialogComponent extends BaseComponent<HTMLElement> {
  closeListner: onCloseListner;
  constructor() {
    super(`
        <section class="popup">
            <button class="close">
                <i class="fas fa-times"> </i>
            </button>
            <body id="dialog__body"></body>
            <button class="popup__submit">ADD</button>
        </section>
        `);

    const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;
    closeBtn.onclick = () => {};

    const submitBtn = this.element.querySelector(
      ".popup__submit"
    )! as HTMLButtonElement;
    submitBtn.onclick = () => {};
  }

  SetOnCloseListner(listner: onCloseListner) {
    this.closeListner = listner;
  }

  SetOnSubmitListner(listner: onSubmitListner) {
    this.submitListner = listner;
  }
}
