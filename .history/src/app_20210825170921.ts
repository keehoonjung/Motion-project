import { ImageComponent } from "./components/page/item/image.js";
import { TextComponent } from "./components/page/item/text.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponets } from "./components/page/page.js";

class App {
  private readonly page: PageComponets;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponets();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "image Title",
      "https://picsum.photos/200/300"
    );

    image.attachTo(appRoot, "beforeend");

    const video = new VideoComponent(
      "video title",
      "https://www.youtube.com/embed/c9RzZpV460k"
    );

    video.attachTo(appRoot, "beforeend");

    const todo = new TodoComponent("Todo LIst", "doing something");
    todo.attachTo(appRoot, "beforeend");

    const text = new TextComponent("Text", "Hello man!");
    text.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".mainlist")! as HTMLElement);
