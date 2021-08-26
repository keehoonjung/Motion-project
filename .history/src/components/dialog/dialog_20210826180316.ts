import { BaseComponent, Component } from "../base.js";
import { Composer } from "../page/page.js";

type onCloseListner = () => void;
type onSubmitListner = () => void;

export class DialogComponent
  extends BaseComponent<HTMLElement>
  implements Composer
{
  closeListner?: onCloseListner;
  submitListner?: onSubmitListner;
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
    closeBtn.onclick = () => {
      this.closeListner && this.closeListner();
    };

    const submitBtn = this.element.querySelector(
      ".popup__submit"
    )! as HTMLButtonElement;
    submitBtn.onclick = () => {
      this.submitListner && this.submitListner();
    };
  }

  SetOnCloseListner(listner: onCloseListner) {
    this.closeListner = listner;
  }

  SetOnSubmitListner(listner: onSubmitListner) {
    this.submitListner = listner;
  }

  addchild(child: Component) {
    const container = this.element.querySelector("#dilog__body");! as HTMLElement;
  }
}
