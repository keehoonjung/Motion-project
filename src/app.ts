import { ImageComponent } from "./components/page/item/image.js";
<<<<<<< HEAD
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
=======
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
>>>>>>> 8e96661 (componnents refactoring)
  }
}

new App(document.querySelector(".mainlist")! as HTMLElement);
