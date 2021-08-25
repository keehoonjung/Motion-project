import { BaseComponent } from "../../base.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
        <section class="video">
            <div class="video__holder">
                <iframe width="560" height="315" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p class="video__title"></p>
            </div>
        </section>
        `);

    const videoElemnt = this.element.querySelector(
      ".iframe"
    )! as HTMLIFrameElement;
  }
}
