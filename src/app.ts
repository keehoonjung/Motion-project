import { ImageComponent } from "./components/page/item/image.js";
import { PageComponent } from "./components/page/page.js";

class App {
  private readonly page: PageComponent;
  constructor(approot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(approot);

    const image = new ImageComponent(
      "Image Title",
      "https://picsum.photos/600/300"
    );
    image.attachTo(approot, "beforeend");
  }
}

new App(document.querySelector(".mainlist")! as HTMLElement);
