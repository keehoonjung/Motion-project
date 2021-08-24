interface CreateItem {
  item: HTMLDivElement;
  createItrem(name: string): void;
}

export default class CreateItemImpl implements CreateItem {
  item = document.createElement("div");
  mainlist = document.querySelector(".mainlist");
  constructor() {
    this.mainlist?.addEventListener("click", (event) => {
      const target = event.target;
      deleteItem(target);
    });
    this.item.setAttribute("class", "mainlist__item");
  }

  createItem(name: string): void {
    switch (name) {
      case "image":
        createImageItem(titleInput?.value, urlInput?.value);
        break;
      case "video":
        createVideoItem(titleInput?.value, urlInput?.value);
        break;
      case "note":
        createNoteItem(titleInput?.value, urlInput?.value);
        break;
      case "todo":
        createTodoItem(titleInput?.value, urlInput?.value);
        break;
    }
  }
}
