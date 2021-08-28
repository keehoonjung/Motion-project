export interface Component {
  attachTo(parent: HTMLElement, positon?: InsertPosition): void;
  removeFrom(parent: HTMLElement): void;
  attach(element: HTMLElement, position: InsertPosition): void;
}

export class BaseComponent<T extends HTMLElement> implements Component {
  protected readonly element: T;
  constructor(htmlstring: string) {
    const template = document.createElement("template");
    template.innerHTML = htmlstring;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }

  removeFrom(parent: HTMLElement) {
    if (parent !== this.element.parentElement) {
      throw new Error("Parent mismatch");
    }
    parent.removeChild(this.element);
  }

  attach(item: HTMLElement, position: InsertPosition) {
    this.element.insertAdjacentElement(position, item);
  }
}
