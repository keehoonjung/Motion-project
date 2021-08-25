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

  private convertToEmbeddedURL(url: string) :string {
    const regExp = /(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-z0-9-]{11}))|(?:youtu.be\/([a-zA-z0-9-]{11})))/
    const match = url.match(regExp);
    const videoId = match ? match[1] || match[2] : undefined;
    if(videoId){
      return `https://www.youtube.com/embed/${videoId}`
    }
    return url;
    
}
