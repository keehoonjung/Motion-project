import { PageComponets } from "./components/page/page.js";
import { PageItemComponent } from "./components/page/pageitem.js";

class App {
  private readonly page: PageComponets;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponets();
    this.page.attachTo(appRoot);

    const image = PageItemComponent("imgae");
  }
}

new App(document.querySelector(".mainlist")! as HTMLElement);
