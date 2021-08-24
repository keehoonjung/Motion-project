interface CreateItem {
  item: HTMLDivElement;
}

export default class CreateItemImpl implements CreateItem {
  item = document.createElement("div");
}
