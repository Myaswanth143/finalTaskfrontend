const arrData = [
  {
    name: "yaswanth",
    age: 26,
    Country: "russia",
  },
  {
    name: "vamsi",
    age: 25,
    Country: "india",
  },
  {
    name: "vishnu",
    age: 27,
    Country: "india",
  },
];
console.log(arrData.sort());
const sortName = [];
const sortAge = [];
const sortCountry = [];
const rootBody = document.getElementById("root");
arrData.forEach((item, index) => {
  sortName.push(item.name);

  rootBody.innerHTML += `<td>${index + 1}</td>
    <td>${item.name}</td>
    <td>${item.age}</td>
    <td>${item.Country}</td>`;
});
document.getElementById("thead").addEventListener("click", function () {
  rootBody.innerHTML = " ";
  sortName.sort();
  let index = 0;
  for (let i = 0; i < sortName.length; i++) {
    arrData.forEach((item) => {
      // console.log(sortName.includes(item.name), item.name);
      if (sortName[i] === item.name) {
        console.log(item.name);
        index += 1;
        rootBody.innerHTML += `<td>${index}</td>
<td>${item.name}</td>
<td>${item.age}</td>
<td>${item.Country}</td>`;
      }
    });
  }
});
