import { BaseComponent } from "../../base.js";

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(`
        <section class="todo">
            <div class="todo__holder">
                <h2 class="todo__title"></h2>
                <input type="checkbox" class="todo__checkbox">
            </div>
        </section>
        `);

    const todoTitle = this.element.querySelector(
      ".todo__title"
    )! as HTMLHeadingElement;
    todoTitle.textContent = title;

    const todoElement = this.element.querySelector(
      ".todo__checkbox"
    )! as HTMLInputElement;
    todoElement.textContent = body;
  }
}
