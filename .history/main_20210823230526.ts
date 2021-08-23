const mainMenu = document.querySelector(".head__menu");
const popup = document.querySelector(".popup");
const body = document.querySelector("body");

mainMenu?.addEventListener("click", (event) => {
  const target = event.target;
  popup?.classList.add("visible");
});
