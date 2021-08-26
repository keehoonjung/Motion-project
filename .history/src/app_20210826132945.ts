import { PageComponets } from "./components/page/page.js";
import { ImageComponent } from "./item/image.js";
import { TextComponent } from "./item/note.js";
import { TodoComponent } from "./item/todo.js";
import { VideoComponent } from "./item/video.js";
class App {
  private readonly page: PageComponets;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponets();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "image Title",
      "https://picsum.photos/200/300"
    );
    image.attachTo(this.element, "afterbegin");
  }
}

new App(document.querySelector(".mainlist")! as HTMLElement);
