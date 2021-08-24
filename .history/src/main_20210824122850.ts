import CreateItemImpl from "./create";

const mainMenu = document.querySelector(".head__menu");
const popup = document.querySelector(".popup");
const darkcontainer = document.querySelector(".darkcontainer");
const body = document.querySelector("body");
const urlInput = document.querySelector(".popup__item__input");
const titleInput = document.querySelector(".popup__title__input");

const createItem = new CreateItemImpl();

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
    createItem(name);
  }
  titleInput.value = "";
  urlInput.value = "";
  exitPopup();
});

function exitPopup() {
  darkcontainer?.classList.remove("visible");
  popup?.classList.remove("visible");
  popup?.removeAttribute("data-name");
}
