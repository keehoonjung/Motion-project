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
    videoElemnt.src = this.convertToEmbeddedURL(url)! as string;
    const videoTitle = this.element.querySelector(
      ".video__title"
    )! as HTMLHeadingElement;
    videoTitle.textContent = title;
  }

  private convertToEmbeddedURL(url: string) {
    if (url.includes("=")) {
      const id: string[] = url.split("=");
      return `https://www.youtube.com/embed/${id[id.length - 1]}`;
    } else {
      const id: string[] = url.split("/");
      return `https://www.youtube.com/embed/${id[id.length - 1]}`;
    }
  }
}
