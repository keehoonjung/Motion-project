import { BaseComponent } from "../../base.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
        <section class="video">
            <div class="video__holder">
                <iframe class="video__thumbnail"></iframe>
                <h2 class="video__title"></h2>
            </div>
        </section>
        `);

    const videoElemnt = this.element.querySelector(
      ".video__thumbnail"
    )! as HTMLIFrameElement;
    videoElemnt.src = url;
    const videoTitle = this.element.querySelector(
      ".video__title"
    )! as HTMLHeadingElement;
    videoTitle.textContent = title;
  }

  splitVideoId(url: string) {
    const id: string[] = url.split("=");
    return id[1];
  }
}

const add = "https://www.youtube.com/watch?v=LluP7Yk7MLk";
console.log(add.split("="));
const newadd = add.split("=");
console.log(newadd[1]);
