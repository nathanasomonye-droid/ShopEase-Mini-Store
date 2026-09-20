// =========================
// CART
// =========================

let cart = [];

const cartCount = document.getElementById("cartCount");
const cartBtn = document.getElementById("cartBtn");


// Add product to cart
document.querySelectorAll(".add-btn").forEach(button => {

    button.addEventListener("click", () => {

        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        cart.push({
            name: name,
            price: price
        });

        updateCart();

        alert(`${name} has been added to your cart!`);
    });

});


// Update cart counter
function updateCart() {

    cartCount.textContent = cart.length;

}


// Show cart
cartBtn.addEventListener("click", () => {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }


    let message = "Your Cart:\n\n";

    let total = 0;


    cart.forEach((item, index) => {

        message +=
            `${index + 1}. ${item.name} - $${item.price.toFixed(2)}\n`;

        total += item.price;

    });


    message +=
        `\nTotal: $${total.toFixed(2)}`;


    alert(message);

});


// =========================
// PRODUCT SEARCH
// =========================

const searchInput =
    document.getElementById("searchInput");

const products =
    document.querySelectorAll(".product");


searchInput.addEventListener("input", () => {

    const searchTerm =
        searchInput.value.toLowerCase().trim();


    products.forEach(product => {

        const name =
            product.dataset.name.toLowerCase();

        const category =
            product.dataset.category.toLowerCase();


        if (
            name.includes(searchTerm) ||
            category.includes(searchTerm)
        ) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

});


// =========================
// NEWSLETTER
// =========================

const newsletterForm =
    document.getElementById("newsletterForm");


newsletterForm.addEventListener("submit", event => {

    event.preventDefault();

    const email =
        newsletterForm.querySelector("input").value;


    alert(
        `Thanks for subscribing!\n\n${email}`
    );


    newsletterForm.reset();

});