// var button1 = document.querySelector("button");
// button1.addEventListener("click", function () {
//   document.body.classList.toggle("colorblack");
//   document.button.classList.toggle("colorblack");
// });
document.querySelector("button").addEventListener("click", ({ target }) => {
  target.classList.toggle("btn-color");
  document.body.classList.toggle("colorblack");
});
