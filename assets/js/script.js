const menuLists = document.querySelectorAll(".menu-item")
console.log(menuLists)
let active = menuLists[0]
console.log(active)
menuLists.forEach((elem) => {

    active.classList.add("menu-active-item")
    console.log(elem)
    elem.addEventListener("click", () => {
        console.log(elem)
        active.classList.remove("menu-active-item")
        active = elem
        active.classList.add("menu-active-item")
    })
})
// cards 
var product = [
    {

        id: 1,
        Name: "Delicious Pizza",
        desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: "$20",
        img: "assets/img/f1.png ",
        catagory: "pizza"

    },
    {
        id: 2,
        Name: "Delicious Burger",
        desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: "$15",
        img: " assets/img/f2.png",
        catagory: "burger"
    },

    {
        id: 3,
        Name: "Delicious Pizza",
        desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: "$17",
        img: "assets/img/f3.png",
        catagory: "pizza"
    },
    {
        id: 4,
        Name: "Delicious Pasta",
        desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: "$18",
        img: "assets/img/f4.png",
        catagory: "pasta"
    },
    {
        id: 5,
        Name: "French Fries",
        desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: "$10",
        img: "assets/img/f5.png",
        catagory: "fries"
    },
    {
        id: 6,
        Name: "Delicious Pizza",
        desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: "$15",
        img: "assets/img/f6.png",
        catagory: "pizza"
    },
    {
        id: 7,
        Name: "Tasty Burger",
        desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: "$12",
        img: "assets/img/f7.png",
        catagory: "burger"
    },
    {
        id: 8,
        Name: "Tasty Burger",
        desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: "$14",
        img: "assets/img/f8.png",
        catagory: "burger"
    },
    {
        id: 9,
        Name: "Delicious Pasta",
        desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: "$10",
        img: "assets/img/f9.png",
        catagory: "pasta"
    },
     {
        id: 10,
        Name: "French Fries",
        desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: "$10",
        img: "assets/img/f10.png",
        catagory: "fries"
    },
    {
        id: 11,
        Name: "French Fries",
        desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: "$10",
        img: "assets/img/f11.png",
        catagory: "fries"
    },
    {
        id: 12,
        Name: "Delicious Pasta",
        desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: "$10",
        img: "assets/img/f13.png",
        catagory: "pasta"
    },
    

];

 listItems = document.getElementById("listitem");
const menuItems = document.querySelectorAll(".menu-item");

// Function to display products
function displayProducts(filteredProducts) {
    listItems.innerHTML = "";  // Clear current display
    filteredProducts.forEach(function (item) {
        listItems.innerHTML += `
            <div class="card">
                <div class="card-img">
                    <img src="${item.img}" alt="${item.Name}">
                </div>
                <div class="card-body">
                    <div class="card-name">${item.Name}</div>
                    <div class="card-desc">${item.desc}</div>
                    <div class="card-bottom">
                        <div class="card-price">${item.price}</div>
                        <div class="card-btn"><i class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                </div>
            </div>
        `;
    });
}

// Initial display: show all products
displayProducts(product);

// Add click event to each menu item
menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
        const category = this.textContent.toLowerCase();
        if (category === "all") {
            displayProducts(product);
        } else {
            const filteredProducts = product.filter(function (item) {
                return item.catagory === category;
            });
            displayProducts(filteredProducts);
        }
    });
});

// navbar
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

