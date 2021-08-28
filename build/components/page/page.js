import { BaseComponent } from "../base.js";
export class PageItemComponent extends BaseComponent {
    constructor() {
        super(`
        <li draggable="true" class="page-item">
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
        this.element.addEventListener("dragstart", (event) => {
            this.onDragStart(event);
        });
        this.element.addEventListener("dragend", (event) => {
            this.onDragEnd(event);
        });
        this.element.addEventListener("dragleave", (event) => {
            this.onDragLeave(event);
        });
        this.element.addEventListener("dragenter", (event) => {
            this.onDragEnter(event);
        });
    }
    onDragStart(_) {
        this.notiyStateListner("start");
        this.element.classList.add("lifted");
    }
    onDragEnd(_) {
        this.notiyStateListner("end");
        this.element.classList.remove("lifted");
    }
    onDragEnter(_) {
        this.notiyStateListner("enter");
        this.element.classList.add("drop-area");
    }
    onDragLeave(_) {
        this.notiyStateListner("leave");
        this.element.classList.remove("drop-area");
    }
    notiyStateListner(state) {
        this.DragstateListner && this.DragstateListner(this, state);
    }
    setOnDragStateListner(listner) {
        this.DragstateListner = listner;
    }
    addchild(child) {
        const container = this.element.querySelector(".page-item__body");
        child.attachTo(container, "beforeend");
    }
    setOnCloseListner(listner) {
        this.closeListener = listner;
    }
    muteChildren(state) {
        if (state === "mute") {
            this.element.classList.add("mute-child");
        }
        else {
            this.element.classList.remove("mute-child");
        }
    }
    getBoundingRect() {
        return this.element.getBoundingClientRect();
    }
    onDropped() {
        this.element.classList.remove("drop-area");
    }
}
export class PageComponets extends BaseComponent {
    constructor(pageItemConstructor) {
        super(`<ul class="page"></ul>`);
        this.pageItemConstructor = pageItemConstructor;
        this.children = new Set();
        this.element.addEventListener("drop", (event) => {
            this.onDrop(event);
        });
        this.element.addEventListener("dragover", (event) => {
            this.onDragOver(event);
        });
    }
    onDrop(event) {
        event.preventDefault();
        if (!this.droptarget) {
            return;
        }
        if (this.dragtarget && this.dragtarget !== this.droptarget) {
            const dropY = event.clientY;
            const srcElement = this.dragtarget.getBoundingRect();
            this.droptarget.attach(this.dragtarget, dropY > srcElement.y ? "afterend" : "beforebegin");
        }
        this.droptarget.onDropped();
    }
    onDragOver(event) {
        event.preventDefault();
        console.log("dragover!");
    }
    addchild(section) {
        const item = new this.pageItemConstructor();
        item.addchild(section);
        item.attachTo(this.element, "beforeend");
        item.setOnCloseListner(() => {
            item.removeFrom(this.element);
            this.children.delete(item);
        });
        this.children.add(item);
        item.setOnDragStateListner((target, state) => {
            switch (state) {
                case "start":
                    this.dragtarget = target;
                    this.updateSection("mute");
                    break;
                case "end":
                    this.dragtarget = undefined;
                    this.updateSection("unmute");
                    break;
                case "leave":
                    this.droptarget = undefined;
                    break;
                case "enter":
                    this.droptarget = target;
                    break;
            }
        });
    }
    updateSection(state) {
        this.children.forEach((section) => {
            section.muteChildren(state);
        });
    }
}
