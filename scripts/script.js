// document.addEventListener("click", () => {
//   document.body.classList.toggle("Salom");
// });
const elBtns = document.querySelector(".btns");
const elBtns1 = document.querySelector(".btns1");
const click = document.getElementsByClassName("clicker");
click[0].addEventListener("click", (evt) => {
  console.log("clickers");
  document.body.classList.toggle("salom");
  evt.stopPropagation();
});

elBtns.addEventListener("click", btnsClick);
elBtns1.addEventListener("click", btnsClick1);

function btnsClick(evt) {
  console.log("btnds");
}

function btnsClick1(evt) {
  console.log("btns1");

  evt.stopPropagation();
}
// function btnsClick1(evt) {
//   console.log("btns1");

//   evt.stopPropagation();
// }function btnsClick1(evt) {
//   console.log("btns1");

//   evt.stopPropagation();
// }
// function btnsClick1(evt) {
//   console.log("btns1");

//   evt.stopPropagation();
// }function btnsClick1(evt) {
//   console.log("btns1");

//   evt.stopPropagation();
// }
// function btnsClick1(evt) {
//   console.log("btns1");

//   evt.stopPropagation();
// }function btnsClick1(evt) {
//   console.log("btns1");

//   evt.stopPropagation();
// }
// function btnsClick1(evt) {
//   console.log("btns1");

//   evt.stopPropagation();
// }function btnsClick1(evt) {
//   console.log("btns1");

//   evt.stopPropagation();
// }
