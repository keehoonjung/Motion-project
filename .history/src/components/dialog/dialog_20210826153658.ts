import { BaseComponent } from "../base.js";

export class DialogComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`
        <section class="popup visible">
            <button class="popup__exitbtn">
                <i class="fas fa-times"> </i>
            </button>
            <body id="dialog__body"></body>
            <button class="popup__addbtn">ADD</button>
        </section>
        `);

    const exitBtn = this.element.querySelector(
      ".popup__exitbtn"
    )! as HTMLButtonElement;
    exitBtn.onclick = () => {
      this.element.classList.remove("visible");
    };

    const addBtn = this.element.querySelector(
      ".popup__addbtn"
    )! as HTMLButtonElement;
    addBtn.onclick = () => {
      this.element.classList.remove("visible");
    };
  }
}
