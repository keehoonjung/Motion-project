class BaseComponent<T> {
  private readonly element: T;
  constructor(htmlstring: string) {
    const template = document.createElement("template");
    template.innerHTML = htmlstring;
  }
}
