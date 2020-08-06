var btn = $('.nav__burger'),
	menu = $('.nav__main'),
	mask = $('.mask'),
	cont = $('.nav-container'),
	item = $('.nav__link');

function menuShow (){
	btn.on('click', function(){
		menu.toggleClass('is-active');
		mask.toggleClass('is-active');
		cont.toggleClass('is-active');
	});
	item.on('click', function(){
			//$('is-active').toggleClass('is-active',true);
			menu.toggleClass('is-active',false);
			mask.toggleClass('is-active',false);
			cont.toggleClass('is-active',false);
	})


}