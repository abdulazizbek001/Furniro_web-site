let elList = document.querySelector('.info_list');

elMovie.forEach((item) => {

    let newCard = `
    <li class="info-item">
        <img class="info-img" src="${item.image}" alt="img" width="285" height="301">
        <div class="info-box">
                <h3 class="info-box_title">${item.name}</h3>
                <h6 class="info-box_titleh6">${item.fullName}</h6>
            <span class="info-box_span">
                <h2 class="info-box_titleh2">${item.money}</h2>
                <s class="info-box_line_text">${item.fakeMoney}</s>
            </span>
        </div>
        <div class="info-wrap">
            <button>Add to cart</button>
            <button class="info-wrap_heart">
                <img src="./src/assets/svg/shop-info-heart.svg" alt="svg" width="15" height="15">
            </button>
        </div>
    </li>
        `
    elList.innerHTML += newCard

    let elShopping = document.querySelector('.shopping-box');
    let elHeartBtn = document.querySelectorAll('.info-wrap_heart');

    elHeartBtn.forEach((element) => {
        element.addEventListener('click', (e) => {
            elShopping.innerHTML += `
            <li class="shopping_list-item">
                <img src="${item.image}" alt="img" class="shopping_item-img" width="105" height="105">
                <div class="shopping_item-box">
                    <h4 class="shopping_item-box-title">${item.name}</h4>
                    <div class="shopping_item-box-wrap">
                        <p class="shopping_item-wrap-number">1 X</p>
                        <p class="shopping_item-wrap-money">${item.money}</p>
                    </div>
                </div>
                <button class="shopping_item-btn">
                    <img src="./src/assets/svg/shopping_close-item.svg" alt="close-btn" width="20" height="20">
                </button>
            </li>
            `
            let shoppingBtn = document.querySelectorAll('.shopping_item-btn');
            
            shoppingBtn.forEach((item) => {
                item.addEventListener('click', (e) => {
                    e.preventDefault()
                    e.target.parentElement.parentElement.remove()
                })
            })
        })  
    })
})