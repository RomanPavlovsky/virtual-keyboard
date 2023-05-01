import { keys } from "./keys";
const keyboard = document.querySelector(".keyboard");
const lettersKeys = document.querySelectorAll(`[data-type="letters"]`);
const multiSymbolsKeys = document.querySelectorAll(
  `[data-type="multi-symbols"]`
);
const multiLettersKeys = document.querySelectorAll(
  `[data-type="multi-letters"]`
);
export const multiLang = () => {
  let keysCombination = [];
  const reRender = (language) => {
    for (let key of lettersKeys) {
      for (const i of keys) {
        if (key.dataset.index === i.code) {
          if (language === "en") {
            key.firstElementChild.textContent = `${i.name.en}`;
          } else {
            key.firstElementChild.textContent = `${i.name.ru}`;
          }
        }
      }
    }
    for (let key of multiSymbolsKeys) {
      for (const i of keys) {
        if (key.dataset.index === i.code) {
          if (language === "en") {
            key.firstElementChild.textContent = `${i.name.en[1]}`;
            key.lastElementChild.textContent = `${i.name.en[2]}`;
          } else {
            key.firstElementChild.textContent = `${i.name.ru[1]}`;
            key.lastElementChild.textContent = `${i.name.ru[2]}`;
          }
        }
      }
    }
    for (let key of multiLettersKeys) {
      for (const i of keys) {
        if (key.dataset.index === i.code) {
          if (language === "en") {
            key.firstElementChild.textContent = `${i.name.en[1]}`;
            key.lastElementChild.textContent = `${i.name.en[2]}`;
          } else {
            key.firstElementChild.textContent = `${i.name.ru[1]}`;
            key.lastElementChild.textContent = `${i.name.ru[2]}`;
          }
        }
      }
    }
  };
  // reRender();
  const swapLang = () => {
    const lang = localStorage.getItem("lang");
    if (lang === null || lang === "en") {
      localStorage.setItem("lang", "ru");
      reRender("ru");
    } else {
      localStorage.setItem("lang", "en");
      reRender("en");
    }
  };
  const checkCombination = () => {
    if (keysCombination.length === 2) {
      if (
        (keysCombination.includes("ControlLeft") &&
          keysCombination.includes("AltLeft")) ||
        (keysCombination.includes("ControlLeft") &&
          keysCombination.includes("AltRight"))
      ) {
        return true;
      } else if (
        (keysCombination.includes("ControlRight") &&
          keysCombination.includes("AltLeft")) ||
        (keysCombination.includes("ControlRight") &&
          keysCombination.includes("AltRight"))
      ) {
        return true;
      } else {
        return false;
      }
    }
  };
  const clearCombination = () => {
    setTimeout(() => {
      if (document.querySelector(".ctrl-left").classList.contains("key_up")) {
        keysCombination = keysCombination.filter(
          (elem) => elem === "ControlLeft"
        );
      }
      if (document.querySelector(".alt-left").classList.contains("key_up")) {
        keysCombination = keysCombination.filter((elem) => elem === "AltLeft");
      }
      if (document.querySelector(".ctrl-right").classList.contains("key_up")) {
        keysCombination = keysCombination.filter(
          (elem) => elem === "ControlRight"
        );
      }
      if (document.querySelector(".alt-right").classList.contains("key_up")) {
        keysCombination = keysCombination.filter((elem) => elem === "AltRight");
      }
      if (
        document.querySelector(".ctrl-left").classList.contains("key_up") ===
          false &&
        document.querySelector(".alt-left").classList.contains("key_up") ===
          false &&
        document.querySelector(".ctrl-right").classList.contains("key_up") ===
          false &&
        document.querySelector(".alt-right").classList.contains("key_up") ===
          false
      ) {
        keysCombination = [];
      }
    });
  };
  document.addEventListener("keydown", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (
      event.code === "ControlLeft" ||
      event.code === "ControlRight" ||
      event.code === "AltRight" ||
      event.code === "AltLeft"
    ) {
      keysCombination.push(event.code);
    }
  });
  document.addEventListener("keyup", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (checkCombination()) {
      swapLang();
    }
    clearCombination();
  });
  keyboard.addEventListener("mousedown", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!!event.target.closest(".ctrl-left")) {
      keysCombination.push("ControlLeft");
    }
    if (!!event.target.closest(".alt-left")) {
      keysCombination.push("AltLeft");
    }
    if (!!event.target.closest(".ctrl-right")) {
      keysCombination.push("ControlRight");
    }
    if (!!event.target.closest(".alt-right")) {
      keysCombination.push("AltRight");
    }
  });
  document.addEventListener("mouseup", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (checkCombination()) {
      swapLang();
    }
    clearCombination();
  });
};
multiLang();
