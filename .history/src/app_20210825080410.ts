import { PageComponets } from "./components/page.js";

class App {
  private readonly page: PageComponets;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponets();
    this.page.attachTo(appRoot);
  }
}

new App(document.querySelector(".mainlist"));
