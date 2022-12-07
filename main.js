// menu class toggle
const menuToggle = document.querySelector('#menu-toggle');

// quantity increment and decrement
const minusBtn = document.querySelector('#decrease');
const plusBtn = document.querySelector('#increase');
const quantity = document.querySelector('#quantity');


menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open-menu');
});

minusBtn.addEventListener('click', reduceQuantity);
plusBtn.addEventListener('click', increaseQuantity);

function reduceQuantity() {
    let currentQty = parseInt(quantity.textContent);
    if (currentQty <= 1) {
        alert('Minimum is 1');
    } else {
        currentQty = currentQty--;
        console.log(currentQty--);
        quantity.textContent = currentQty;
    }
}

function increaseQuantity() {
    let currentQty = parseInt(quantity.textContent);
    console.log(currentQty++);
    currentQty = currentQty++;
    quantity.textContent = currentQty;
}