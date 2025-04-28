document.getElementById("savechanges").addEventListener("click", function (e) {
  e.preventDefault();
  document
    .getElementById("savechanges")
    .setAttribute("data-bs-dismiss", "modal");
  document.querySelectorAll(".input").value = "";
});
