document.addEventListener("DOMContentLoaded", function () {
  let arr = ["apple", "bannana", "grape", "jackFruit"];
  //   const inputVal = document.querySelector(".inputval");
  //   console.log(inputVal);

  function renderFruits() {
    const searchItem = document
      .querySelector(".SearchInput")
      .value.toLowerCase();
    const filterFruit = arr.filter((fruit) =>
      fruit.toLowerCase().includes(searchItem)
    );
    console.log(filterFruit);
    const root = document.getElementById("root");
    filterFruit.map((item) => {
      const li = document.createElement("li");
      li.innerHTML = item;
      root.append(li);
    });
  }
  document
    .querySelector(".SearchInput")
    .addEventListener("input", function (e) {
      root.innerHTML = " ";
      renderFruits();
    });
  renderFruits();
});
