function calcCartPriceAndDelivery(){
    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceElements = cartWrapper.querySelectorAll('.price_currency');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDeliveryEl = document.querySelector('[data-cart-delivery]');

    const totalPriceEl = document.querySelector('.total-price');

    // let, потому что его значение будет постоянно меняться, а вот значение константы менять нельзя
    // Общая стоимость товаров
    let priceTotal = 0;
    

    // Обходим все блоки с ценами в корзине
    priceElements.forEach(function (item) {

        // Находим количество товара
        const amountEl = item.closest('.cart-item').querySelector('[data-counter]');

        // Добавляем стоимость товара в общую стоимость (цена * количество)
        priceTotal = priceTotal + (parseInt(item.innerText) * parseInt(amountEl.innerText)) // Можно записать еще как totalPrice += currentPrice, значени тоже самое

 
    });
    // Отображаем цену на странице
    totalPriceEl.innerText = priceTotal;


    // Скрываем / показываем блок со стоимостью доставки
    if(priceTotal > 0){
        cartDeliveryEl.classList.remove('none')
    } else {
        cartDeliveryEl.classList.add('none')
    }

    // Указываем стоимось доставки
    if (priceTotal >= 150){
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '5$';
    }
}