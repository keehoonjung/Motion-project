import { BaseComponent, Component } from "../base.js";
import { Composer } from "../page/page.js";

type onCloseListner = () => void;
type onSubmitListner = () => void;

export interface MediaData {
  readonly title: string;
  readonly url: string;
}

export interface TextData {
  readonly title: string;
  readonly body: string;
}

export class DialogComponent
  extends BaseComponent<HTMLElement>
  implements Composer
{
  private closeListner?: onCloseListner;
  private submitListner?: onSubmitListner;
  constructor() {
    super(`
        <section class="popup">
          <div class="popup__container">
            <button class="close">
                <i class="fas fa-times"> </i>
            </button>
            <div id="dialog__body"></div>
            <button class="popup__submit">ADD</button>
          </div>
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
    const container = this.element.querySelector(
      "#dialog__body"
    )! as HTMLElement;
    console.log(container);

    child.attachTo(container, "afterbegin");
  }
}
