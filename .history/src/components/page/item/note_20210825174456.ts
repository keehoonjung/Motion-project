import { BaseComponent } from "../../base.js";

export class TextComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(`
        <section class="note">
            <div class="note__holder">
                <h2 class="note__title"></h2>
                <p class="note__body"></p>
            </div>
        </section>
        `);

    const noteTitle = this.element.querySelector(
      ".note__title"
    )! as HTMLHeadingElement;
    noteTitle.textContent = title;

    const noteBody = this.element.querySelector(
      ".note__body"
    )! as HTMLParagraphElement;
    noteBody.textContent = body;
  }
}
