interface CreateItem {
  item: HTMLDivElement;
  createItrem(name: string): void;
}

export default class CreateItemImpl implements CreateItem {
  item = document.createElement("div");
  constructor() {
    this.item.setAttribute("class", "mainlist__item");
  }
}
