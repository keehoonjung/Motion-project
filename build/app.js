import { ImageComponent } from "./components/page/item/image.js";
import { TextComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponets } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponets();
        this.page.attachTo(appRoot);
        const image = new ImageComponent("image Title", "https://picsum.photos/200/300");
        image.attachTo(appRoot, "beforeend");
        const video = new VideoComponent("video title", "https://youtu.be/c9RzZpV460k");
        video.attachTo(appRoot, "beforeend");
        const todo = new TodoComponent("Todo LIst", "doing something");
        todo.attachTo(appRoot, "beforeend");
        const note = new TextComponent("Text", "Hello man!");
        note.attachTo(appRoot, "beforeend");
    }
}
new App(document.querySelector(".mainlist"));
