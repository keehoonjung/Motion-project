<<<<<<< HEAD
export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

export class BaseComponet<T extends HTMLElement> implements Component {
=======
export interface Base {
  attchTo(parent: HTMLElement, position?: InsertPosition): void;
}

export class BaseComponent<T extends HTMLElement> {
>>>>>>> 8e96661 (componnents refactoring)
  protected readonly element: T;
  constructor(htmlstring: string) {
    const template = document.createElement("template");
    template.innerHTML = htmlstring;
    this.element = template.content.firstElementChild! as T;
  }
<<<<<<< HEAD
=======

>>>>>>> 8e96661 (componnents refactoring)
  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
