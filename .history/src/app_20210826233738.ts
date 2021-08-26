import { Component } from "./components/base.js";
import { DialogComponent } from "./components/dialog/dialog.js";
import { DialogInputItem } from "./components/dialog/input/inputitem.js";
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

    const headMenu = document.querySelector(
      ".head__menu"
    )! as HTMLButtonElement;

    headMenu.addEventListener("click", (event) => {
      const target = event.target! as HTMLElement;
      if (target.tagName == "BUTTON") {
        this.bindElementToDialog(target);
      }
    });
  }

  private bindElementToDialog(target: HTMLElement) {
    const type = target.dataset["type"]! as string;
    const name = target.dataset["name"]! as string;
    const dialog = new DialogComponent();
    const dialogInput = new DialogInputItem("Title", type);
    dialog.addchild(dialogInput);

    dialog.SetOnCloseListner(() => {
      dialog.removeFrom(dialogroot);
    });
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
      dialog.removeFrom(dialogroot);
    });
    dialog.attachTo(dialogroot);
  }
}

new App(document.querySelector(".mainlist")! as HTMLElement, document.body);
