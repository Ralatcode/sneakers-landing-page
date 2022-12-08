// menu class toggle
const menuToggle = document.querySelector('#menu-toggle');

// quantity increment and decrement
const minusBtn = document.querySelector('#decrease');
const plusBtn = document.querySelector('#increase');
const quantity = document.querySelector('#quantity');
const cartIcon = document.querySelector('#cart');
const addCart = document.querySelector('#add-to-cart');
const cartDiv = document.querySelector('#cart-div')
const cartNum = document.createElement('span');

// menu toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open-menu');
});

minusBtn.addEventListener('click', reduceQuantity);
plusBtn.addEventListener('click', increaseQuantity);
addCart.addEventListener('click', addToCart);

function addToCart() {
    cartNum.innerHTML = quantity.textContent;
    cartNum.classList.add('cart-counter');
    cartDiv.appendChild(cartNum);
}

function reduceQuantity() {
    let currentQty = parseInt(quantity.textContent);
    if (currentQty <= 1) {
        alert('Minimum is 1');
    } else {
        currentQty = currentQty--;
        console.log(currentQty--);
        quantity.innerText = currentQty;
    }
}

function increaseQuantity() {
    let currentQty = parseInt(quantity.textContent);
    console.log(currentQty++);
    currentQty = currentQty++;
    quantity.textContent = currentQty;
}