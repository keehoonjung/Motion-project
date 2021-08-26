import { DialogComponent } from "./components/dialog/dialog.js";
import { ImageComponent } from "./components/page/item/image.js";
import { TextComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponets, PageItemComponent, } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponets(PageItemComponent);
        this.page.attachTo(appRoot);
        const image = new ImageComponent("image Title", "https://picsum.photos/200/300");
        this.page.addchild(image);
        const video = new VideoComponent("video title", "https://youtu.be/c9RzZpV460k");
        this.page.addchild(video);
        const todo = new TodoComponent("Todo LIst", "doing something");
        this.page.addchild(todo);
        const note = new TextComponent("Text", "Hello man!");
        this.page.addchild(note);
        const imageBtn = document.querySelector("button[data-name='image']");
        imageBtn.addEventListener("click", () => {
            const dialog = new DialogComponent();
            dialog.SetOnCloseListner(() => {
                dialog.removeFrom(document.body);
            });
            dialog.SetOnSubmitListner(() => {
                dialog.removeFrom(document.body);
            });
            dialog.attachTo(document.body);
        });
    }
}
new App(document.querySelector(".mainlist"));
