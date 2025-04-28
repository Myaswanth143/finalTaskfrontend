/////////////////////Quetion--2/////////////////////////

///////
const showCart = document.querySelector(".showCart");
const cartShow = document.querySelector(".cartShow");
const costPrice = document.querySelector(".costPrice");
const val = document.querySelector(".val");
const cartCount = document.getElementById("count");
const question_2 = document.querySelector(".question-2");
let index = 0;
async function fetchCart() {
  const res = await fetch("https://fakestoreapi.com/products");

  const data = await res.json();
  console.log(data);
  showCart.innerHTML += data
    .map((item, index) => {
      return ` <div class="card" style="width: 12rem; height:25rem">
            <img src=${
              item.image
            } class="card-img-top" alt="..." width="15%" height="40%">
            <div class="card-body" height=20px>
            <h6 class="card-title">${item.title}</h6>
            <p class="card-text">Rating:${item.rating.rate}</p>
            <p class="card-text">Price:${item.price}</p>

            </div>
            <button class="btn btn-primary" onclick=addToCart(${index},1,${item.price.toFixed(
        2
      )})>Add to Cart</button>
            </div> `;
    })
    .join("");

  // console.log(addToCart());
}
fetchCart();
let sum = 0;
let count = 0;
function addToCart(index, num, cost) {
  sum += cost;
  costPrice.textContent = sum;
  count += num;
  cartCount.innerHTML = count;

  console.log(sum);
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      cartShow.innerHTML += `<div>
        <div class="addgrid">
        <div>
        <img src="${data[index].image}" alt="image" width=40% height=60%/>
        </div>
        <div>
        <h6 class="card-title">${data[index].title}</h6>
        <p class="card-text">Price:${data[index].price}</p>
        </div>
        </div>
        <button class="btn btn-warning" onclick=delfun(this,${data[index].price})>Remove</button>
        </div><br>`;
    });
}
console.log(sum);
const delfun = function (e, price) {
  e.closest("div").remove();
  sum -= price;
  count = count - 1;
  cartCount.innerHTML = count;
  costPrice.textContent = sum;
};
