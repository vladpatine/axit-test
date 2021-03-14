$(document).ready(function () {
	// Слайдер
	$('.slider').slick({
		centerMode: true, // Центрирывать активный элемент
 		centerPadding: '60px', //
		infinite: true, //Бесконечная прокрутка
		slidesToShow: 3,  // Количество слайдов для показа
        prevArrow: '<button type="button" class="slick-prev">Предидущая</button>',
        nextArrow: '<button type="button" class="slick-next">Следующая</button>',
		slidesToScroll: 1 // Количество слайдов за скролл
	  // responsive: [ // Адаптив
	  //   {
	  //     breakpoint: 1024,
	  //     settings: {
	  //       slidesToShow: 3,
	  //       slidesToScroll: 3,
	  //       infinite: true,
	  //       dots: true
	  //     }
	  //   }
	  // ]
	});
	// mobile-menu
	$('.bars, .mobile-close, .mobile-menu li a').click(function () {
		$('.mobile-menu-wrap, .bars').toggleClass('el-active');
		$('.bars').toggleClass('bars-active');
	})
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".mobile-menu-wrap"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0
		    && $(".mobile-menu-wrap").hasClass("el-active")) { // и не по его дочерним элементам
			$('.mobile-menu-wrap, .bars').toggleClass('el-active'); // выполняем действие$('.mobile-menu-wrap').toggleClass('el-active'); // выполняем действие
			if ($('.bars').hasClass('bars-active')) {
				$('.mobile-menu-wrap, .bars').toggleClass('el-active');
				$('.bars').toggleClass('bars-active');
			}
		}
	});

	// ease scrolling
    $('.menu li a, .mobile-menu li a, .ftr-info_menu li a').click( function(){ // ловим клик по ссылке с классом
	var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});
	
