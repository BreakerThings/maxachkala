
// Добавляем прослушку на всем окне
window.addEventListener('click', function(event){

    // Объявляем переменну для счетчика тут, поскольку обьявив константу в условии или функции она будет существовать в этой самой функции или условии, за их пределы она выходит не может
    let counter;

    // Проверяем клик строго по кнопкам Плюс либо Минус
    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
         // Находим обертку счетчика

        const counterWrapper = event.target.closest('.counter-wrapper')

        // Находим див с числом счетчика

        counter = counterWrapper.querySelector('[data-counter]')

    }

    // Проверяем являеться ли элемент по которому был совершен клик кнопкой Плюс
    if(event.target.dataset.action === 'plus'){
        counter.innerText = ++counter.innerText
    };
    // Проверяем являеться ли элемент по которому был совершен клик кнопкой Минус
    if(event.target.dataset.action === 'minus'){

        // Проверяем чтобы счетчик был больше 0 или 1, тоесть минимума, который мы хотим

        if(parseInt(counter.innerText) > 1){

                // Уменьшаем текст в счетчике на 1

                counter.innerText = --counter.innerText

                //  Проверка на товар который находиться в корзине 

        } else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){
            // Удаляем товар из корзины
            event.target.closest('.cart-item').remove();

            // Отображение статуса корзины Пустая / Полная
            toggleCartStatus();

            // Пересчет общей стоимости товаров в корзине
            calcCartPriceAndDelivery() // Он тут нужен, чтобы отображался 0, так как удаление происходило раньше функции calcCartPriceAndDelivery(), то мы вызывали(кликали) не существующую функцию(блок, метод хз)
        }

        };


        // Проверяем клик на + или - внутри корзины
        if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){ // <-- Если он находиться внутри корзины
            
            // Пересчет общей стоимости товаров в корзине
            calcCartPriceAndDelivery()
        }

});

