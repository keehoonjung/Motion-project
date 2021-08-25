import { BaseComponent } from "../../base.js";

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`
        <section class="todo">
          <h2 class="todo__title"></h2>
          <input type="checkbox" class="todo__checkbox">
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
