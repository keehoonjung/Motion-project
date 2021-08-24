interface CreateItem {
  createItem(name: string, title: string, url: string): void;
}

interface POPUP {
  url: string;
  title: string;
  name: string;
  openPopup(name: string, type: string): void;
  exitPopup(): void;
}

class CreateItemImpl implements CreateItem {
  mainlist = document.querySelector(".mainlist");
  constructor() {
    this.mainlist?.addEventListener("click", (event) => {
      const target = event.target;
      this.deleteItem(target);
    });
  }

  createItem(name: string, title: string, url: string): void {
    const item = document.createElement("div");
    switch (name) {
      case "image":
        this.createImageItem(title, url, item);
        break;
      case "video":
        this.createVideoItem(title, url, item);
        break;
      case "note":
        this.createNoteItem(title, url, item);
        break;
      case "todo":
        this.createTodoItem(title, url, item);
        break;
    }
    this.mainlist?.appendChild(item);
  }

  createImageItem(title: string, url: string, item: HTMLDivElement) {
    item.setAttribute("class", "mainlist__item");
    item.innerHTML = `
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

  createTodoItem(title: string, text: string, item: HTMLDivElement) {
    item.setAttribute("class", "mainlist__text");
    item.innerHTML = `
      <h2 class="mainlist__text__title">${title}</h2>
      <ul class="todo__items">
        <li class="todo__item">
          <span>${text}</span>
        </li>
      </ul>
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

class PopupImpl implements POPUP {
  popup = document.querySelector(".popup");
  darkcontainer = document.querySelector(".darkcontainer");
  urlInput = document.querySelector(".popup__item__input");
  titleInput = document.querySelector(".popup__title__input");
  popupText = document.querySelector(".popup__url__text");

  constructor() {
    this.popup?.addEventListener("click", (event) => {
      const target = event.target;
      const title = this.titleInput.value;
      const url = this.urlInput.value;
      const name = this.popup.dataset.name;

      if (target?.classList.value == "fas fa-times") {
        this.exitPopup();
      } else if (target?.classList.value === "popup__addbtn") {
        Create.createItem(name, title, url);
        this.exitPopup();
      }
    });
  }

  openPopup(name: string, type: string) {
    this.popup?.classList.add("visible");
    this.darkcontainer?.classList.add("visible");
    this.popup?.setAttribute("data-name", name);
    switch (type) {
      case "item":
        this.popupText!.textContent = "URL";
        break;
      case "text":
        this.popupText!.textContent = "BODY";
        break;
    }
  }

  exitPopup() {
    this.titleInput.value = "";
    this.urlInput.value = "";
    this.darkcontainer?.classList.remove("visible");
    this.popup?.classList.remove("visible");
    this.popup?.removeAttribute("data-name");
  }
}

const mainMenu = document.querySelector(".head__menu");

const Create = new CreateItemImpl();
const Popup = new PopupImpl();

mainMenu?.addEventListener("click", (event) => {
  const target = event.target;
  const type: string = target.dataset.type;
  const name: string = target.dataset.name;
  Popup.openPopup(name, type);
});
