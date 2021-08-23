const mainMenu = document.querySelector(".head__menu");
const popup = document.querySelector(".popup");

mainMenu?.addEventListener("click", (event) => {
  const target = event.target;
  popup?.classList.add("visible");
});
