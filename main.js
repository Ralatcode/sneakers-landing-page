// menu class toggle
const menuToggle = document.querySelector('#menu-toggle');

const minusBtn = document.querySelector('#decrease');
const plusBtn = document.querySelector('#increase');
const quantity = document.querySelector('#quantity');
// const cartIcon = document.querySelector('#cart-icon');
const addCart = document.querySelector('#add-to-cart');
const cartDiv = document.querySelector('#cart-div');
const cartNum = document.createElement('span');
const cartItemImg = document.createElement('img');
const cart = document.getElementById('cart');
const cartContent = document.getElementById('cart-content');
const emptyCartText = document.getElementById('empty-cart-text');
const cartInnerDiv = document.createElement('div');
const cartItemName = document.createElement('h3');
const priceDiv = document.createElement('div');
const itemQty = document.createElement('h3');
const itemPrice = document.createElement('span');
const deleteItem = document.createElement('img');
const checkoutBtn = document.createElement('button');

// menu toggle
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open-menu');
});

// adds item details to cart modal
function addItemToCart() {
  cartItemImg.src = './images/image-product-1-thumbnail.jpg';
  cartItemImg.alt = 'thumbnail 1';
  cartItemImg.classList.add('cart-image');
  cartContent.appendChild(cartItemImg);
  cartContent.appendChild(cartInnerDiv);
  cartItemName.innerText = 'Fall limited edition sneakers';
  cartItemName.classList.add('cart-item-name');
  cartInnerDiv.appendChild(cartItemName);
  priceDiv.classList.add('cart-item-price-div');
  cartInnerDiv.appendChild(priceDiv);
  itemQty.innerText = `$125 x ${quantity.textContent}`;
  itemQty.classList.add('item-Qty');
  itemPrice.innerText = `$${quantity.textContent * 125}`;
  itemPrice.classList.add('item-price');
  priceDiv.append(itemQty, itemPrice);
  deleteItem.src = './images/icon-delete.svg';
  deleteItem.alt = 'delete-item-icon';
  deleteItem.classList.add('cursor-pointer');
  cartContent.appendChild(deleteItem);
}

function removeEmptyCartText() {
  cartContent.classList.remove('min-w-[290px]');
  emptyCartText.classList.add('hidden');
}

function addToCart() {
  cartNum.innerHTML = quantity.textContent;
  cartNum.classList.add('cart-counter');
  cartDiv.appendChild(cartNum);
  removeEmptyCartText();
  addItemToCart();
  checkoutBtn.innerText = 'Checkout';
  checkoutBtn.classList.add('checkout-btn');
  cart.appendChild(checkoutBtn);
}

function deleteCartItem() {
  const itemsToBeRemoved = [cartItemImg, cartInnerDiv, priceDiv, deleteItem, checkoutBtn];
  itemsToBeRemoved.forEach((item) => {
    item.remove();
  });
  cartContent.classList.add('min-w-[290px]');
  emptyCartText.classList.remove('hidden');
  cartDiv.removeChild(cartNum);
}

// quantity decrement
function reduceQuantity() {
  let currentQty = parseInt(quantity.textContent, 10);
  if (currentQty <= 1) {
    alert('Minimum is 1');
  } else {
    currentQty -= 1;
    quantity.innerText = currentQty;
  }
}

// quantity increment
function increaseQuantity() {
  let currentQty = parseInt(quantity.textContent, 10);
  currentQty += 1;
  quantity.textContent = currentQty;
}

function closeModal() {
  cart.classList.add('opacity-0');
  cart.addEventListener('transitionend', () => {
    cart.classList.add('hidden');
  }, {
    capture: false,
    once: true,
    passive: false,
  });
}

minusBtn.addEventListener('click', reduceQuantity);
plusBtn.addEventListener('click', increaseQuantity);
addCart.addEventListener('click', addToCart);

// view and hide cart on
cartDiv.addEventListener('click', (e) => {
  e.stopPropagation();
  if (cart.classList.contains('hidden')) {
    cart.classList.remove('hidden');
    setTimeout(() => {
      cart.classList.remove('opacity-0');
    }, 20);
  } else {
    closeModal();
  }
}, false);

// close modal when the outside window is clicked
document.addEventListener('click', (e) => {
  const point = e.target;
  if (point.closest('#cart') === null) {
    closeModal();
  }
}, false);

// remove cart item when delete icon is pressed
deleteItem.addEventListener('click', deleteCartItem);
