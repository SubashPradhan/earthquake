$(document).ready(function(){
	$('#donate').click(function(){
		$(this).fadeOut(5000);
			alert("THANKS FOR YOUR SUPPORT!!!");
	});

	$('input').focus(function(){
		$('input').css('outline-color', '#ff0000');
	});

	$('textarea').focus(function(){
		$('textarea').css('outline-color', '#ff0000');
	});

	$('#click').click(function(){
		alert('THANK YOU FOR YOUR CO-OPERATION!!! YOUR MAIL HAS BEEN DELIVERED TO SUPROWILDE5@GMAIL.COM');

	});

});
