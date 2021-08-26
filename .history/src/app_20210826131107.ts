import { PageComponets } from "./components/page/page.js";
import { PageItemComponent } from "./components/page/pageitem.js";

class App {
  private readonly page: PageComponets;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponets();
    this.page.attachTo(appRoot);

    const image = new PageItemComponent("imgae");
    image.attachTo(this.page, "beforeend");
  }
}

new App(document.querySelector(".mainlist")! as HTMLElement);
