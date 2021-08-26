import { BaseComponent } from "../base.js";

export class DialogComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`
        <section class="popup">
            <button class="close">
                <i class="fas fa-times"> </i>
            </button>
            <body id="dialog__body"></body>
            <button class="popup__addbtn">ADD</button>
        </section>
        `);

    const exitBtn = this.element.querySelector(
      ".popup__exitbtn"
    )! as HTMLButtonElement;
    exitBtn.onclick = () => {};

    const addBtn = this.element.querySelector(
      ".popup__addbtn"
    )! as HTMLButtonElement;
    addBtn.onclick = () => {};
  }
}
