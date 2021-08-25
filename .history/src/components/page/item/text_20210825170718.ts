import { BaseComponent } from "../../base.js";

export class TextComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(`
        <section class="text">
            <div class="text__holder">
                <h2 class="text__title"></h2>
                <p class="text__item"></p>
            </div>
        </section>
        `);

    const textTitle = this.element.querySelector(
      ".text__title"
    )! as HTMLHeadingElement;
    textTitle.textContent = title;
  }
}
