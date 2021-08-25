export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

export class BaseComponet<T extends HTMLElement> implements Component {
  protected readonly element: T;
  constructor(htmlstring: string) {
    const template = document.createElement("template");
    template.innerHTML = htmlstring;
    this.element = template.content.firstElementChild! as T;
  }
  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
