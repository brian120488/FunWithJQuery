$(document).ready(function(){
// all jQuery methods go here...
	
	//Challenge 0
	$(".dance-icon").hover(ifHovering, ifNotHovering);

	function ifHovering() {
		$(this)[0].src = $(this)[0].src.substring(0,$(this)[0].src.length - 8) + "giphy.gif";
		//let str = $(this)[0].src;
		//let name = str.substring(0,str.length - 8);
		//$(this)[0].src = name + "giphy.gif";
	}
	function ifNotHovering() {
		$(this)[0].src = $(this)[0].src.substring(0,$(this)[0].src.length - 9) + "icon.png";
		//let str = $(this)[0].src;
		//let name = str.substring(0,str.length - 9);
		//$(this)[0].src = name + "icon.png";
	}

	//Challenge 1
	$("#title").html("Apex Legends Emotes"); 

	//Challenge 2
	$("#extra-text").remove();

	//Challenge 3
	$("#logo").click(onClick);
	
	function onClick() {
		$("body")[0].style.backgroundImage = 'url("images/bg2.jpg")';
	}

	//Challenge 4
	$(".emote-name").click(yeet)
	function yeet(){
		$(".emote-info").slideToggle();
	}
});
