export class BaseComponent {
    constructor(htmlstring) {
        const template = document.createElement("template");
        template.innerHTML = htmlstring;
        this.element = template.content.firstElementChild;
    }
    attachTo(parent, position = "afterbegin") {
        parent.insertAdjacentElement(position, this.element);
    }
    removeFrom(parent) {
        if (parent !== this.element.parentElement) {
            throw new Error("Parent mismatch");
        }
        parent.removeChild(this.element);
    }
}
