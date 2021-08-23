"use strict";
const mainMenu = document.querySelector(".head__menu");
const popup = document.querySelector(".popup");
const darkcontainer = document.querySelector(".darkcontainer");
const body = document.querySelector("body");
const mainlist = document.querySelector(".mainlist");
const urlInput = document.querySelector(".popup__item__input");
const titleInput = document.querySelector(".popup__title__input");
mainMenu === null || mainMenu === void 0 ? void 0 : mainMenu.addEventListener("click", (event) => {
    const target = event.target;
    const name = target.dataset.name;
    popup === null || popup === void 0 ? void 0 : popup.classList.add("visible");
    darkcontainer === null || darkcontainer === void 0 ? void 0 : darkcontainer.classList.add("visible");
    popup === null || popup === void 0 ? void 0 : popup.setAttribute("data-name", name);
});
popup === null || popup === void 0 ? void 0 : popup.addEventListener("click", (event) => {
    const target = event.target;
    const name = popup.dataset.name;
    if ((target === null || target === void 0 ? void 0 : target.classList.value) == "fas fa-times") {
        exitPopup();
    }
    else if ((target === null || target === void 0 ? void 0 : target.classList.value) === "popup__addbtn") {
        switch (name) {
            case "image":
                createImageItem(titleInput === null || titleInput === void 0 ? void 0 : titleInput.value, urlInput === null || urlInput === void 0 ? void 0 : urlInput.value);
                break;
            case "video":
                createVideoItem(titleInput === null || titleInput === void 0 ? void 0 : titleInput.value, urlInput === null || urlInput === void 0 ? void 0 : urlInput.value);
                break;
            case "note":
                createNoteItem(titleInput === null || titleInput === void 0 ? void 0 : titleInput.value, urlInput === null || urlInput === void 0 ? void 0 : urlInput.value);
                break;
            case "todo":
                createTodoItem(titleInput === null || titleInput === void 0 ? void 0 : titleInput.value, urlInput === null || urlInput === void 0 ? void 0 : urlInput.value);
                break;
        }
        titleInput.value = "";
        urlInput.value = "";
        exitPopup();
    }
});
mainlist === null || mainlist === void 0 ? void 0 : mainlist.addEventListener("click", (event) => {
    const target = event.target;
    deleteItem(target);
});
function createImageItem(title, url) {
    const item = document.createElement("div");
    item.setAttribute("class", "mainlist__item");
    item.innerHTML = `
  <img src=${url} alt="random__img" />
  <h2 class="mainlist__title">${title}</h2>
  <button class="mainlist__deletebtn">
    <i class="fas fa-times"></i>
  </button>
  `;
    mainlist === null || mainlist === void 0 ? void 0 : mainlist.appendChild(item);
}
function createVideoItem(title, url) {
    const item = document.createElement("div");
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
    mainlist === null || mainlist === void 0 ? void 0 : mainlist.appendChild(item);
}
function createNoteItem(title, text) {
    const item = document.createElement("div");
    item.setAttribute("class", "mainlist__text");
    item.innerHTML = `
  <h2 class="mainlist__text__title">${title}</h2>
  <span> ${text} </span>
  <button class="mainlist__deletebtn">
    <i class="fas fa-times"></i>
  </button>
    `;
    mainlist === null || mainlist === void 0 ? void 0 : mainlist.appendChild(item);
}
function createTodoItem(title, text) {
    const item = document.createElement("div");
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
    mainlist === null || mainlist === void 0 ? void 0 : mainlist.appendChild(item);
}
function exitPopup() {
    darkcontainer === null || darkcontainer === void 0 ? void 0 : darkcontainer.classList.remove("visible");
    popup === null || popup === void 0 ? void 0 : popup.classList.remove("visible");
    popup === null || popup === void 0 ? void 0 : popup.removeAttribute("data-name");
}
function deleteItem(target) {
    if ((target === null || target === void 0 ? void 0 : target.classList.value) == "fas fa-times") {
        target.parentNode.parentNode.remove();
    }
}
