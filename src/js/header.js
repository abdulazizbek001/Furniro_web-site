const elHeartBtn = document.querySelector('.header_btn-heart');
const elShoppingBtn = document.querySelector('.header_btn-shoppng');
const elShoppingList = document.querySelector('.shopping-box_list');
const elShopping = document.querySelector('.shopping-box');
const elShoppingClose = document.querySelector('.shopping-box_top-btn');
const elShoppingRezult = document.querySelector('.shopping_rezult');

elShoppingBtn.addEventListener('click', () => {
    elShopping.style.right = '0';
    elShoppingRezult.style.display = 'flex';
})

let elShoppingCloseItem = document.querySelectorAll('.shopping_item-btn');
let elShoppingItemBox = document.querySelectorAll('.shopping_item-box');

elShoppingCloseItem.forEach((item) => {
    item.addEventListener('click', () => {
        elShoppingItemBox.innerHTML = ' '
    })
})

elShoppingClose.addEventListener('click', () => {
    elShopping.style.right = '-465px';
    elShopping.style.position = 'absolute';
    elShoppingRezult.style.display = 'none';
})

elShoppingRezult.addEventListener('click', () => {
    elShopping.style.right = '-465px';
    elShopping.style.position = 'absolute'
    elShoppingRezult.style.display = 'none';
})