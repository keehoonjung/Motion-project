export class TodoComponent {
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
  }
}
