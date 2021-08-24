interface CreateItem {
  item: HTMLDivElement;
  createItrem(name: string): void;
}

export default class CreateItemImpl implements CreateItem {
  mainlist = document.querySelector(".mainlist");
  constructor() {
    this.item.setAttribute("class", "mainlist__item");
    this.mainlist?.addEventListener("click", (event) => {
      const target = event.target;
      this.deleteItem(target);
    });
  }

  createItem(name: string): void {
    const item = document.createElement("div");
    switch (name) {
      case "image":
        createImageItem(titleInput?.value, urlInput?.value, item);
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
    this.mainlist?.appendChild(item);
  }

  createImageItem(title: string, url: string, item: HTMLDivElement) {
    this.item.innerHTML = `
    <img src=${url} alt="random__img" />
    <h2 class="mainlist__title">${title}</h2>
    <button class="mainlist__deletebtn">
      <i class="fas fa-times"></i>
    </button>
    `;
  }

  deleteItem(target: EventTarget | null) {
    if (target?.classList.value == "fas fa-times") {
      target.parentNode.parentNode.remove();
    }
  }
}
