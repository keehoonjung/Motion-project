import { DialogComponent, } from "./components/dialog/dialog.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { TextSectionInput } from "./components/dialog/input/text-input.js";
import { ImageComponent } from "./components/page/item/image.js";
import { TextComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponets, PageItemComponent, } from "./components/page/page.js";
class App {
    constructor(appRoot, dialogroot) {
        this.dialogroot = dialogroot;
        this.page = new PageComponets(PageItemComponent);
        this.page.attachTo(appRoot);
        this.bindElementToDialog("#new-image", MediaSectionInput, (input) => new ImageComponent(input.title, input.url));
        this.bindElementToDialog("#new-video", MediaSectionInput, (input) => new VideoComponent(input.title, input.url));
        this.bindElementToDialog("#new-todo", TextSectionInput, (input) => new TodoComponent(input.title, input.body));
        this.bindElementToDialog("#new-note", TextSectionInput, (input) => new TextComponent(input.title, input.body));
    }
    bindElementToDialog(sector, InputComponent, makeSection) {
        const elementBtn = document.querySelector(sector);
        elementBtn.addEventListener("click", () => {
            const dialog = new DialogComponent();
            const input = new InputComponent();
            dialog.addchild(input);
            dialog.attachTo(this.dialogroot);
            dialog.SetOnCloseListner(() => {
                dialog.removeFrom(this.dialogroot);
            });
            dialog.SetOnSubmitListner(() => {
                const image = makeSection(input);
                this.page.addchild(image);
                dialog.removeFrom(this.dialogroot);
            });
        });
    }
}
new App(document.querySelector(".mainlist"), document.body);
