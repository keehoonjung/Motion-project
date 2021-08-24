interface CreateItem {
  item: HTMLDivElement;
  createItrem(name: string): void;
}

export default class CreateItemImpl implements CreateItem {
  item = document.createElement("div");
  mainlist = document.querySelector(".mainlist");
  constructor() {
    this.item.setAttribute("class", "mainlist__item");
    this.mainlist?.addEventListener("click", (event) => {
      const target = event.target;
      this.deleteItem(target);
    });
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

  createImageItem(title: string, url: string) {
    const item = document.createElement("div");
    item.setAttribute("class", "mainlist__item");
    item.innerHTML = `
    <img src=${url} alt="random__img" />
    <h2 class="mainlist__title">${title}</h2>
    <button class="mainlist__deletebtn">
      <i class="fas fa-times"></i>
    </button>
    `;
    mainlist?.appendChild(item);
  }

  deleteItem(target: EventTarget | null) {
    if (target?.classList.value == "fas fa-times") {
      target.parentNode.parentNode.remove();
    }
  }
}
