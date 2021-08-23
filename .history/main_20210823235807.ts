const mainMenu = document.querySelector(".head__menu");
const popup = document.querySelector(".popup");
const darkcontainer = document.querySelector(".darkcontainer");
const body = document.querySelector("body");
const mainlist = document.querySelector(".mainlist");
const urlInput = document.querySelector(".popup__item__input");
const titleInput = document.querySelector(".popup__title__input");

mainMenu?.addEventListener("click", (event) => {
  const target = event.target;
  console.log("hello");
  popup?.classList.add("visible");
  darkcontainer?.classList.add("visible");
});

popup?.addEventListener("click", (event) => {
  const target = event.target;
  if (target?.classList.value == "fas fa-times") {
    exitPopup();
  } else if (target?.classList.value === "popup__addbtn") {
    createImageItem(titleInput?.value, urlInput?.value);
    titleInput.value = "";
    urlInput.value = "";
    exitPopup();
  }
});

mainlist?.addEventListener("click", (event) => {
  console.log(event.target);
});

function createImageItem(title: string, url: string) {
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

function createVideoItem(title: string, url: string) {
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
  mainlist?.appendChild(item);
}

function createNoteItem(title: string, url: string) {
  const item = document.createElement("div");
  item.setAttribute("class", "mainlist__item");
  item.innerHTML = `
  <h2 class="mainlist__text__title">${title}</h2>
  <span> Hello </span>
  <button class="mainlist__deletebtn">
    <i class="fas fa-times"></i>
  </button>
    `;
  mainlist?.appendChild(item);
}

function exitPopup() {
  darkcontainer?.classList.remove("visible");
  popup?.classList.remove("visible");
}
