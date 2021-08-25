export class BaseComponent {
    constructor(htmlstring) {
        const template = document.createElement("template");
        template.innerHTML = htmlstring;
        this.element = template.content.firstElementChild;
    }
    attachTo(parent, position = "afterbegin") {
        parent.insertAdjacentElement(position, this.element);
    }
}
