const mainMenu = document.querySelector(".head__menu");
const popup = document.querySelector(".popup");
const darkcontainer = document.querySelector(".darkcontainer");
const body = document.querySelector("body");
const mainlist = document.querySelector(".mainlist");

mainMenu?.addEventListener("click", (event) => {
  const target = event.target;
  console.log("hello");
  popup?.classList.add("visible");
  darkcontainer?.classList.add("visible");
});

popup?.addEventListener("click", (event) => {
  const target = event.target;
  if (target?.classList.value == "fas fa-times") {
    darkcontainer?.classList.remove("visible");
    popup?.classList.remove("visible");
  }
});

function createImageItem(value: string) {
  const item = document.createElement("div");
  item.setAttribute("class", "mainlist__item");
  item.innerHTML = `
  <img src="${value}" alt="random__img" />
  <h2 class="mainlist__title">Image</h2>
  <button class="mainlist__deletebtn">
    <i class="fas fa-times"></i>
  </button>
  `;
  mainlist?.appendChild(item);
}
