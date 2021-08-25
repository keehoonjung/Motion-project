<<<<<<< HEAD
import { BaseComponet } from "../../base.js";

export class ImageComponent extends BaseComponet<HTMLElement> {
  constructor(title: string, url: string) {
    super(`        
        <section class="image">
          <div class="image__holder">
            <img class="image__thumbnail">
            <p class="image__title">image</p>
          </div>
        </section>`);
=======
import { BaseComponent } from "../../base.js";

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
        <section class="image">
            <div class="image__holder">
                <img class="image__thumbnail">
                <p class="image__title"></p>
            </div>
        </section>
        `);
>>>>>>> 8e96661 (componnents refactoring)

    const imageElement = this.element.querySelector(
      ".image__thumbnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

<<<<<<< HEAD
    const titleElement = this.element.querySelector(
      ".image__title"
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
=======
    const imageTitle = this.element.querySelector(
      ".image__title"
    )! as HTMLParagraphElement;
    imageTitle.textContent = title;
>>>>>>> 8e96661 (componnents refactoring)
  }
}
