interface CreateItem {
  item: HTMLDivElement;
  createItrem(name: string): void;
}

export default class CreateItemImpl implements CreateItem {
  mainlist = document.querySelector(".mainlist");
  constructor() {
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
        createVideoItem(titleInput?.value, urlInput?.value, item);
        break;
      case "note":
        createNoteItem(titleInput?.value, urlInput?.value, item);
        break;
      case "todo":
        createTodoItem(titleInput?.value, urlInput?.value, item);
        break;
    }
    this.mainlist?.appendChild(item);
  }

  createImageItem(title: string, url: string, item: HTMLDivElement) {
    item.setAttribute("class", "mainlist__item");
    this.item.innerHTML = `
    <img src=${url} alt="random__img" />
    <h2 class="mainlist__title">${title}</h2>
    <button class="mainlist__deletebtn">
      <i class="fas fa-times"></i>
    </button>
    `;
  }

  createVideoItem(title: string, url: string, item: HTMLDivElement) {
    item.setAttribute("class", "mainlist__item");
    item.innerHTML = `
    <iframe
    width="400"
    height="250"
    src=${url}
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
  <h2 class="mainlist__title">${title}</h2>
  <button class="mainlist__deletebtn">
    <i class="fas fa-times"></i>
  </button>
      `;
  }

  createNoteItem(title: string, text: string, item: HTMLDivElement) {
    item.setAttribute("class", "mainlist__text");
    item.innerHTML = `
    <h2 class="mainlist__text__title">${title}</h2>
    <span> ${text} </span>
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
