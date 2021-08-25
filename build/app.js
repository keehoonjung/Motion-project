import { ImageComponent } from "./components/page/item/image.js";
import { PageComponets } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponets();
        this.page.attachTo(appRoot);
        const image = new ImageComponent("image Title", "https://picsum.photos/200/300");
        image.attachTo(appRoot, "beforeend");
    }
}
new App(document.querySelector(".mainlist"));
