import { Component } from "./components/base.js";
import { DialogComponent } from "./components/dialog/dialog.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { ImageComponent } from "./components/page/item/image.js";
import { TextComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import {
  Composer,
  PageComponets,
  PageItemComponent,
} from "./components/page/page.js";

class App {
  private readonly page: Component & Composer;
  constructor(appRoot: HTMLElement, private dialogroot: HTMLElement) {
    this.page = new PageComponets(PageItemComponent);
    this.page.attachTo(appRoot);

    const imgBtn = document.querySelector("#new-image")! as HTMLButtonElement;

    imgBtn.addEventListener("click", () => {
      const dialog = new DialogComponent();
      const MediaSection = new MediaSectionInput();
      dialog.addchild(MediaSection);
      dialog.SetOnCloseListner(() => {
        dialog.removeFrom(this.dialogroot);
      });
      dialog.SetOnSubmitListner(() => {
        const image = new ImageComponent(MediaSection.title, MediaSection.url);
        this.page.addchild(image);
      });
    });
  }

  private bindElementToDialog(target: HTMLElement) {
    dialog.SetOnSubmitListner(() => {
      const title = dialogInput.submitTitleInputValue();
      const item = dialogInput.submitItemInputValue();
      switch (name) {
        case "image":
          const image = new ImageComponent(title, item);
          this.page.addchild(image);
          break;
        case "video":
          const video = new VideoComponent(title, item);
          this.page.addchild(video);
          break;
        case "todo":
          const todo = new TodoComponent(title, item);
          this.page.addchild(todo);
          break;
        case "note":
          const note = new TextComponent(title, item);
          this.page.addchild(note);
          break;
      }
      dialog.removeFrom(this.dialogroot);
    });
    dialog.attachTo(this.dialogroot);
  }
}

new App(document.querySelector(".mainlist")! as HTMLElement, document.body);
