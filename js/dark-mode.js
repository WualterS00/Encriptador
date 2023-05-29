const btnSwitch = document.querySelector("#switch-mode");
const imgSwitch = document.querySelector(".logo1");
const imgTitleWhite = document.querySelector("#logo2");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
  if (imgSwitch.classList.contains("disable")) {
    imgSwitch.classList.remove("disable");
    imgTitleWhite.classList.remove("active");

    imgSwitch.classList.add("active");
    imgTitleWhite.classList.add("disable");
    inputText.focus();
  } else {
    imgSwitch.classList.remove("active");
    imgTitleWhite.classList.remove("disable");

    imgSwitch.classList.add("disable");
    imgTitleWhite.classList.add("active");
    inputText.focus();
  }

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "true");
  } else {
    localStorage.setItem("darkMode", "false");
  }

});

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
  btnSwitch.classList.add("active");
  if (imgSwitch.classList.contains("disable")) {
    imgSwitch.classList.remove("disable");
    imgTitleWhite.classList.remove("active");

    imgSwitch.classList.add("active");
    imgTitleWhite.classList.add("disable");
  } else {
    imgSwitch.classList.remove("active");
    imgTitleWhite.classList.remove("disable");

    imgSwitch.classList.add("disable");
    imgTitleWhite.classList.add("active");
  }
}