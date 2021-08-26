import { BaseComponent } from "../base.js";
import { ImageComponent } from "./item/image.js";
import { TodoComponent } from "./item/todo.js";
import { VideoComponent } from "./item/video.js";

export class PageItemComponent extends BaseComponent<HTMLLIElement> {
  constructor(type: string) {
    super(`
        <li class="page__item">
            <button class="item__deletebtn">
                <i class="fas fa-times"> </i>
            </button>
         </li>
        `);

    switch (type) {
      case "image":
        const image = new ImageComponent(
          "image Title",
          "https://picsum.photos/200/300"
        );
        image.attachTo(this.element, "afterbegin");
      case "video":
        const video = new VideoComponent(
          "video title",
          "https://youtu.be/c9RzZpV460k"
        );
        video.attachTo(this.element, "beforeend");
      case "todo":
        const todo = new TodoComponent("Todo LIst", "doing something");
        todo.attachTo(this.element, "beforeend");
    }
  }
}
