
/*===========================================*/
/*===========================================*/
$(window).resize(function(event){
	adaptiveFunction()
})

function adaptiveMenuHeader(width, height){
	// Меню которое в даный момент отображается на сайте
	const $currentHeaderMenu = $('.menu');
	// Дополнительное меню(блок <div class='header-menu'></div>>) куда будем добавлять текущее меню $currentHeaderMenu
	const $headerMenu = $('.header-menu');
	// Бургер
	const $burger = $('.header-menu-burger');

	const $headerMenuToAppend = $('.header__menu')

	if (width <= 790){
		if (!$burger.hasClass('done')){
			$burger.addClass('done')
			$currentHeaderMenu.addClass('done').appendTo($headerMenu)
		}
	}
	else {
		if ($burger.hasClass('done')){
			$currentHeaderMenu.removeClass('done').appendTo($headerMenuToAppend)
			$headerMenu.removeClass('active')
			$burger.removeClass('active')
			$burger.removeClass('done');
			$headerMenu.removeClass('done')
		}
	}
}
function adaptiveFunction(event){
	const $width = $(window).outerWidth();
	const $height = $(window).outerHeight()
	adaptiveMenuHeader($width, $height)
}
adaptiveFunction()
/*===========================================*/
/*===========================================*/
const $burger = $('.header-menu-burger');
const $headerMenu = $('.header-menu');
const $body = $('body')
$burger.on('click', openMenuBurger)
function openMenuBurger(){
	$body.toggleClass('lock')
	$burger.toggleClass('active')
	$headerMenu.toggleClass('active')
}
/*===========================================*/
/*===========================================*/