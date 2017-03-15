$(document).ready(function() {	
	var yoda = $('section.characters form ul li input#checkbox_yoda'),
			trooper = $('section.characters form ul li input#checkbox_trooper'),
			vader = $('section.characters form ul li input#checkbox_vader');

	yoda.parent().css('background-image','url("../zadanie/images/yoda.png")');
	trooper.parent('li').css('background-image', 'url("../zadanie/images/trooper.png")');
	vader.parent('li').css('background-image', 'url("../zadanie/images/vader.png")');

	$('section.characters form ul li').each(function(){
		var label = $(this).find('label'),
    		text = label.attr('data-sentence');
    label.text(text);
  });

  $('section.characters form ul li').click(function(){
  	var input = $(this).find('input');

  	if (!input.prop('checked')) {
  		$(this).css('border-color', '#000');
  		input.prop('checked', true);
  	} else {
  		$(this).css('border-color', 'transparent');
  		input.prop('checked', false);
  	}
  });

	var song = document.createElement('audio');
	song.setAttribute('src', '../zadanie/imperial_march.mp3');
  $("form").submit(function(e){
    if (!yoda.prop('checked')) {
    	e.preventDefault();
  		song.pause();
  		song.play();    	
    } 
	});
});