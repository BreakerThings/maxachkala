// Div внутри корзины, в который мы добавляем товары
const cartWrapper = document.querySelector('.cart-wrapper')

// Отслеживаем клик на странице
window.addEventListener('click', function(event){

    // Проверяем что клик был совершен по кнопке "Добавить в корзину" 
    if(event.target.hasAttribute('data-cart')) {

        // Нходим карточку с товаром, внутри которой был совершен клик
        const card = event.target.closest('.card')

        // Собираем данные с этого товара и записываем их в единый объект productInfo
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price_weight').innerText,
            price: card.querySelector('.price_currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        }


        // Проверять есть ли уже такой товар в корзине
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        // Если товар есть в корзине
        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        } else {

        // Собранные данные вставим в шаблон для товара в корзине
            const cartItemHtml = `<div class="cart-item" data-id="${productInfo.id}">
        <img class="card-item_img" src="${productInfo.imgSrc}">
    
<h2 class="card-item_item-title">${productInfo.title}</h2>
                                        <div class="c">
<small data-items-in-box class="card-item_text-muted">${productInfo.itemsInBox}</small>
<div class="price">
    <span class="price_weight">${productInfo.weight}</span>
    <span class="price_currency">${productInfo.price}</span>
</div>
                                        </div>
<div class="items counter-wrapper">
        <button class="card-item_item__control" data-action="minus">-</button>
        <div class="card-item_text_counter" data-counter>${productInfo.counter}</div>
        <button class="card-item_item__control" data-action="plus">+</button>
</div>

                            </div>`;
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHtml); // afterend - после лемента, berforeend - до элемента
            
        }
        // Сбрасываем счетчик добавленного товара на "1"
        card.querySelector('[data-counter]').innerText = '1';

        // Отображение статуса корзины Пустая / Полная
        toggleCartStatus();

        // Пересчет общей стоимости товаров в корзине
        calcCartPriceAndDelivery()
    }
});