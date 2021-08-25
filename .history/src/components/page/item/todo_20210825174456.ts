import { BaseComponent } from "../../base.js";

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(`
        <section class="todo">
            <div class="todo__holder">
                <h2 class="todo__title"></h2>
                <ul class="todo__lists">
                    <li class="todo__list"></li>
                </ul>
            </div>
        </section>
        `);

    const todoList = this.element.querySelector(
      ".todo__list"
    )! as HTMLUListElement;
    todoList.textContent = body;

    const todoTitle = this.element.querySelector(
      ".todo__title"
    )! as HTMLHeadingElement;
    todoTitle.textContent = title;
  }
}
