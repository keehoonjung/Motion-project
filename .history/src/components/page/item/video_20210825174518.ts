import { BaseComponent } from "../../base.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
        <section class="video">
            <div class="video__holder">
                <iframe class="video__thumbnail" width="560" height="315" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
}
