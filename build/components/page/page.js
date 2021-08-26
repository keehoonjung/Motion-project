import { BaseComponent } from "../base.js";
export class PageItemComponent extends BaseComponent {
    constructor() {
        super(`
        <li class="page-item">
            <section class="page-item__body"></section>
            <div class="page-item__controls">
                <button class="close">
                    <i class="fas fa-times"> </i>
                </button>
            </div>
        </li>
        `);
        const deleteBtn = this.element.querySelector(".close");
        deleteBtn.onclick = () => {
            this.closeListener && this.closeListener();
        };
    }
    addchild(child) {
        const container = this.element.querySelector(".page-item__body");
        child.attachTo(container, "beforeend");
    }
    setOnCloseListner(listner) {
        this.closeListener = listner;
    }
}
export class PageComponets extends BaseComponent {
    constructor(pageItemConstructor) {
        super(`<ul class="page"></ul>`);
        this.pageItemConstructor = pageItemConstructor;
    }
    addchild(section) {
        const item = new this.pageItemConstructor();
        item.addchild(section);
        item.attachTo(this.element, "beforeend");
        item.setOnCloseListner(() => {
            item.removeFrom(this.element);
        });
    }
}
