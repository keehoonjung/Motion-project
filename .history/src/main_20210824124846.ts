interface CreateItem {
  createItem(name: string): void;
}

class CreateItemImpl implements CreateItem {
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
        this.createImageItem(titleInput?.value, urlInput?.value, item);
        break;
      case "video":
        this.createVideoItem(titleInput?.value, urlInput?.value, item);
        break;
      case "note":
        this.createNoteItem(titleInput?.value, urlInput?.value, item);
        break;
      case "todo":
        this.createTodoItem(titleInput?.value, urlInput?.value, item);
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

const mainMenu = document.querySelector(".head__menu");
const popup = document.querySelector(".popup");
const darkcontainer = document.querySelector(".darkcontainer");
const body = document.querySelector("body");
const urlInput = document.querySelector(".popup__item__input");
const titleInput = document.querySelector(".popup__title__input");

const Create = new CreateItemImpl();

mainMenu?.addEventListener("click", (event) => {
  const target = event.target;
  const name = target.dataset.name;
  popup?.classList.add("visible");
  darkcontainer?.classList.add("visible");
  popup?.setAttribute("data-name", name);
});

popup?.addEventListener("click", (event) => {
  const target = event.target;
  const name = popup.dataset.name;
  if (target?.classList.value == "fas fa-times") {
    exitPopup();
  } else if (target?.classList.value === "popup__addbtn") {
    Create.createItem(name);
    exitPopup();
  }
});

function openPopup(name: string) {
  popup?.classList.add("visible");
  darkcontainer?.classList.add("visible");
  popup?.setAttribute("data-name", name);
}

function exitPopup() {
  titleInput.value = "";
  urlInput.value = "";
  darkcontainer?.classList.remove("visible");
  popup?.classList.remove("visible");
  popup?.removeAttribute("data-name");
}
