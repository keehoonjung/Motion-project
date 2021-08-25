import { ImageComponent } from "./components/page/item/image.js";
import { TextComponent } from "./components/page/item/note.js";
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

    const note = new TextComponent("Text", "Hello man!");
    note.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".mainlist")! as HTMLElement);

const add = "https://www.youtube.com/watch?v=LluP7Yk7MLk";
console.log(add.split("="));
const newadd = add.split("=");
console.log(newadd[1]);