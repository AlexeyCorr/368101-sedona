var link = document.querySelector(".search__link");
var popup = document.querySelector(".popup");
var dateIn = popup.querySelector("[name=date-in]");
var dateOut = popup.querySelector("[name=date-out]");
var form = popup.querySelector("form");
var btnPlus1 = popup.querySelector(".number__btn--plus-1");
var btnMinus1 = popup.querySelector(".number__btn--minus-1");
var btnPlus2 = popup.querySelector(".number__btn--plus-2");
var btnMinus2 = popup.querySelector(".number__btn--minus-2");
var amountAdult = popup.querySelector("[name=adult]");
var amountChild = popup.querySelector("[name=child]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("popup--visibility");
  popup.classList.toggle("popup--animation");
  popup.classList.remove("popup--error");
  dateIn.focus();
});

form.addEventListener("submit", function (evt) {
  if (!dateIn.value || !dateOut.value || !amountAdult.value || !amountChild.value)  {
    evt.preventDefault();
    popup.classList.remove("popup--error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.toggle("popup--error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("popup--visibility")) {
      popup.classList.remove("popup--visibility");
      popup.classList.remove("popup--error");
    }
  }
});

btnPlus1.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (amountAdult.value < 10) {
    amountAdult.value = +amountAdult.value + 1;
  }
});

btnMinus1.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (amountAdult.value > 0) {
    amountAdult.value = +amountAdult.value - 1;
  }
});

btnPlus2.addEventListener("click", function (evt) {
  evt.preventDefault ();
  if (amountChild.value < 10) {
    amountChild.value = +amountChild.value + 1;
  }
});

btnMinus2.addEventListener("click", function (evt) {
  evt.preventDefault ();
  if (amountChild.value > 0) {
    amountChild.value = +amountChild.value - 1;
  }
});
