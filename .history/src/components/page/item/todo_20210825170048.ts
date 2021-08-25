import { BaseComponent } from "../../base.js";

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(`
        <section class="todo">
            <div class="todo__holder">
                <p class="todo__title"></p>
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
      ".todo__titile"
    )! as HTMLParagraphElement;
    todoTitle.textContent = title;
  }
}
