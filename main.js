let category = [
  "burgers",
  "desserts",
  "pizza",
  "soups",
  "sports",
  "starters",
  "wraps",
];

let e_allProducts = document.getElementById("all");
let e_burger = document.getElementById("burgers");
let e_desserts = document.getElementById("desserts");
let e_pizza = document.getElementById("pizza");
let e_soups = document.getElementById("soups");
let e_sports = document.getElementById("sports");
let e_starters = document.getElementById("starter");
let e_wraps = document.getElementById("wraps");

let buttonActive = (e) => {
  e.className += " active";
};

document.addEventListener("DOMContentLoaded", () => {
  loadAllProducts();
});

let clearActive = () => {
  e_allProducts.classList.remove("active");
  e_burger.classList.remove("active");
  e_desserts.classList.remove("active");
  e_pizza.classList.remove("active");
  e_soups.classList.remove("active");
  e_sports.classList.remove("active");
  e_starters.classList.remove("active");
  e_wraps.classList.remove("active");
};

e_allProducts.addEventListener("click", () => {
  loadAllProducts();
  clearActive();
  buttonActive(e_allProducts);
});

e_burger.addEventListener("click", () => {
  loadProductsOf("burgers");
  clearActive();
  buttonActive(e_burger);
});

e_desserts.addEventListener("click", () => {
  loadProductsOf("desserts");
  clearActive();
  buttonActive(e_desserts);
});

e_pizza.addEventListener("click", () => {
  loadProductsOf("pizza");
  clearActive();
  buttonActive(e_pizza);
});

e_soups.addEventListener("click", () => {
  loadProductsOf("soups");
  clearActive();
  buttonActive(e_soups);
});

e_starters.addEventListener("click", () => {
  loadProductsOf("starters");
  clearActive();
  buttonActive(e_starters);
});

e_wraps.addEventListener("click", () => {
  loadProductsOf("wraps");
  clearActive();
  buttonActive(e_wraps);
});

e_sports.addEventListener("click", () => {
  loadProductsOf("sports");
  clearActive();
  buttonActive(e_sports);
});

let loadAllProducts = () => {
  let pContainer = document.getElementById("products");
  let product = ``;
  fetch("products.json")
    .then((res) => res.json())
    .then((data) => {
      let products = ``;
      let data1 = data[0];
      let i = 0;
      while (i < 7) {
        data1[category[i]].forEach((product) => {
          console.log(product);
          products += ` <div class="card m-2" style="width: 200px; height: auto">
         <img
           src="${product.image_url}"
           class="card-img-top"
           alt="..."
           height="150px"
         />
         <div class="card-body p-3">
           <h5 class="card-title fs-6 m-0 text-15">${product.place}</h5>
           <p class="fs-6 card-text mt-1 m-0 text-dark text-12">
             &#8377; ${product.price}
             <span
               class="badge bg-success float-right text-light pl-2 pr-2 pt-1 pb-1"
               >${product.rates} <i class="bx bxs-star"></i
             ></span>
           </p>
           <p class="card-text m-0">${product.description}</p>
           <a href="#" class="btn btn-sm btn-primary mt-2 pr-2 pl-2"
             >Add to cart</a
           >
         </div>
       </div> `;
        });
        i++;
      }

      pContainer.innerHTML = products;
      //   = JSON.stringify(     data[0].burger[0]    );
    });
};

let loadProductsOf = (category) => {
  let pContainer = document.getElementById("products");
  let product = ``;
  fetch("products.json")
    .then((res) => res.json())
    .then((data) => {
      let products = ``;
      let data1 = data[0];

      data1[category].forEach((product) => {
        products += ` <div class="card m-2" style="width: 200px; height: auto">
         <img
           src="${product.image_url}"
           class="card-img-top"
           alt="..."
           height="150px"
         />
         <div class="card-body p-3">
           <h5 class="card-title fs-6 m-0 text-15">${product.place}</h5>
           <p class="fs-6 card-text mt-1 m-0 text-dark text-12">
             &#8377; ${product.price}
             <span
               class="badge bg-success float-right text-light pl-2 pr-2 pt-1 pb-1"
               >${product.rates} <i class="bx bxs-star"></i
             ></span>
           </p>
           <p class="card-text m-0">${product.description}</p>
           <a href="#" class="btn btn-sm btn-primary mt-2 pr-2 pl-2"
             >Add to cart</a
           >
         </div>
       </div> `;
      });

      pContainer.innerHTML = products;
    });
};
