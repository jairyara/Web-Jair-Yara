$(document).ready(main);

var counter = 1;

function main(){
	$('.menu_bar').click(function(){
		//$('nav').toggle();
		if( counter == 1) {
			$('nav').animate({
				left: '0'
			});
			counter = 0;
		}

		else{
			counter = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
};