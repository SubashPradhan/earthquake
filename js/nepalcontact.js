$(document).ready(function(){
	
	$('input').focus(function(){
		$('input').css('outline-color', '#ff0000');
	});

	$('textarea').focus(function(){
		$('textarea').css('outline-color', '#ff0000');
	});

	
});

function donation(){
		var donates = prompt("Please enter your name", "Harry Potter");
		if (person != null) {
		document.getElementByClassname("header").innerHTML =
        "Hello " + donates + "! How are you today?";
	}
}

function submitForm(){
	document.getElementById('click').submit();
}
