import { Component } from "./components/base.js";
import {
  DialogComponent,
  MediaData,
  TextData,
} from "./components/dialog/dialog.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { TextSectionInput } from "./components/dialog/input/text-input.js";
import { ImageComponent } from "./components/page/item/image.js";
import { TextComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import {
  Composer,
  PageComponets,
  PageItemComponent,
} from "./components/page/page.js";

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
  new (): T;
};
class App {
  private readonly page: Component & Composer;
  constructor(appRoot: HTMLElement, private dialogroot: HTMLElement) {
    this.page = new PageComponets(PageItemComponent);
    this.page.attachTo(appRoot);

    const image1 = new ImageComponent("image", "https://picsum.photos/200/300");
    image1.attachTo(appRoot);
    const image2 = new ImageComponent("image", "https://picsum.photos/200/300");
    image2.attachTo(appRoot);
    const image3 = new ImageComponent("image", "https://picsum.photos/200/300");
    image3.attachTo(appRoot);

    this.bindElementToDialog<MediaSectionInput>(
      "#new-image",
      MediaSectionInput,
      (input: MediaSectionInput) => new ImageComponent(input.title, input.url)
    );

    this.bindElementToDialog<MediaSectionInput>(
      "#new-video",
      MediaSectionInput,
      (input: MediaSectionInput) => new VideoComponent(input.title, input.url)
    );

    this.bindElementToDialog<TextSectionInput>(
      "#new-todo",
      TextSectionInput,
      (input: TextSectionInput) => new TodoComponent(input.title, input.body)
    );

    this.bindElementToDialog<TextSectionInput>(
      "#new-note",
      TextSectionInput,
      (input: TextSectionInput) => new TextComponent(input.title, input.body)
    );
  }

  bindElementToDialog<T extends (MediaData | TextData) & Component>(
    sector: string,
    InputComponent: InputComponentConstructor<T>,
    makeSection: (input: T) => Component
  ) {
    const elementBtn = document.querySelector(sector)! as HTMLButtonElement;

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

new App(document.querySelector(".mainlist")! as HTMLElement, document.body);
