const elList = document.querySelector('.shop-info-list');
const elShowInput = document.querySelector('.generator_show-input');
const elGeneratorList = document.querySelector('.generator_list');

alert('Assalomu aleykum aziz foydalanuvchi. Iltimos "Show" nomli inputni raqam bilan to`ldiring.')

elMovies.forEach((item) => {
    elShowInput.addEventListener('input', () => {
        let cewCard = `
            <li class="shop-info-item">
                    <img class="shop-info-img" src="${item.image}" alt="img" width="285" height="301">
                    <div class="shop-info-box">
                        <h3 class="shop-info-box_title">${item.name}</h3>
                        <h6 class="shop-info-box_titleh6">${item.fullName}</h6>
                    <span class="shop-info-box_span">
                        <h2 class="shop-info-box_titleh2">${item.money}</h2>
                        <s class="shop-info-box_line_text">${item.fakeMoney}</s>
                    </span>
                    </div>
                    <div class="shop-info-wrap">
                        <button>Add to cart</button>
                        <button class="shop-info-wrap_heart">
                            <img src="./src/assets/svg/shop-info-heart.svg" alt="svg" width="15" height="15">
                        </button>
                    </div>
            </li>
            `

        // let elShopInfoBox = document.querySelectorAll('.shop-info-box');
        let elShopInfoItem = document.querySelectorAll('.shop-info-item_list');
        elGeneratorList.addEventListener('click', () => {
            elShopInfoItem.forEach(() => {
                elList.style.flexDirection = 'column';
                let ListBtnCard = `
            <li class="shop-info-item_list">
                <img class="shop-info-img" src="${item.image}" alt="img" width="285" height="301">
                <div class="shop-info-box">
                    <h3 class="shop-info-box_title">${item.name}</h3>
                    <h6 class="shop-info-box_titleh6">${item.fullName}</h6>
                    <span class="shop-info-box_span">
                        <h2 class="shop-info-box_titleh2">${item.money}</h2>
                        <s class="shop-info-box_line_text">${item.fakeMoney}</s>
                    </span>
                </div>
                <div class="shop-info-wrap">
                    <button>Add to cart</button>
                    <button class="shop-info-wrap_heart">
                        <img src="./src/assets/svg/shop-info-heart.svg" alt="svg" width="15" height="15">
                    </button>
                </div>
            </li>
            `
                elList.innerHTML = ' '
                elList.innerHTML += ListBtnCard
            })
        })

        if (elShowInput.value == '1') {
            elList.innerHTML = cewCard
        } else if (elShowInput.value == '2') {
            elList.innerHTML = cewCard + cewCard
        } else if (elShowInput.value == '3') {
            elList.innerHTML = cewCard + cewCard + cewCard
        } else if (elShowInput.value == '4') {
            elList.innerHTML = cewCard + cewCard + cewCard + cewCard
        } else if (elShowInput.value == '5') {
            elList.innerHTML = cewCard + cewCard + cewCard + cewCard + cewCard
        } else if (elShowInput.value == '6') {
            elList.innerHTML = cewCard + cewCard + cewCard + cewCard + cewCard + cewCard
        } else if (elShowInput.value == '7') {
            elList.innerHTML = cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard
        } else if (elShowInput.value == '8') {
            elList.innerHTML = cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard
        } else if (elShowInput.value == '9') {
            elList.innerHTML = cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard
        } else if (elShowInput.value == '10') {
            elList.innerHTML = cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard
        } else if (elShowInput.value == '11') {
            elList.innerHTML = cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard
        } else if (elShowInput.value == '12') {
            elList.innerHTML = cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard
        } else if (elShowInput.value == '13') {
            elList.innerHTML = cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard
        } else if (elShowInput.value == '14') {
            elList.innerHTML = cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard
        } else if (elShowInput.value == '15') {
            elList.innerHTML = cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard
        } else if (elShowInput.value == '16') {
            elList.innerHTML = cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard + cewCard
        } else {
            console.log('salom');
        }
    })
})