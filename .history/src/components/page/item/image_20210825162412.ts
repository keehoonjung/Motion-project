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
  }
}
