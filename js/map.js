// ЯНДЕКС КАРТЫ
var myMap;

setTimeout(init, 2000);
// Дождёмся загрузки API и готовности DOM.
// ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center:[31.567778, -36.052550], // Москва
        zoom:4
    });
        myMap.controls
        // Кнопка изменения масштаба.
        .add('zoomControl', { left: 5, top: 5 })
        // Список типов карты
        .add('typeSelector')
        // Стандартный набор кнопок
        .add('mapTools', { left: 35, top: 5 });

        // Добавление метки на карту
        myMap.geoObjects.add(myPlacemark);
}