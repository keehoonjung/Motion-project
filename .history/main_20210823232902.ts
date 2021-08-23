const mainMenu = document.querySelector(".head__menu");
const popup = document.querySelector(".popup");
const darkcontainer = document.querySelector(".darkcontainer");
const body = document.querySelector("body");

mainMenu?.addEventListener("click", (event) => {
  const target = event.target;
  console.log("hello");
  popup?.classList.add("visible");
  darkcontainer?.classList.add("visible");
});

popup?.addEventListener("click", (event) => {
  const target = event.target;
  console.log(target);
  if (target?.classList.value == "fas fa-times") {
    darkcontainer?.classList.remove("visible");
    popup?.classList.remove("visible");
  }
});
