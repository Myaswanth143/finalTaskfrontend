// /////////////////////Quetion--1/////////////////////////

const fetchlist = document.querySelector(".fetchlist");
async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();
  console.log(data);
  data.map((item) => {
    const liEle = document.createElement("li");
    liEle.innerHTML = item.name;
    fetchlist.append(liEle);
  });
}
fetchData();
// const codebtn_1 = document.querySelector(".codebtn-1");
const codebtn1 = function () {
  return (fetchlist.style.opacity = 1);
};
