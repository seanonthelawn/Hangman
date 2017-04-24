$(document).ready(function(){
	
	var words = new Array("HANGMAN","GAME","JAVASCRIPT");
	
	var random = Math.floor((Math.random()*(words.length)));
	
	var guessArray = Array();
	
	var guessedArray = Array();
	
	for(var i = 0; i<words[random].length; i++){
		guessArray += "_ ";
	}
	
	$("#word").html(guessArray);
	
	$("#guess").click(function() {
		
		guessedArray.push($("#guessZone").val());
		$("#guessed").html(guessedArray);
		
		for(var i = 0; i<words[random].length; i++){
			if($("#guessZone").val()== words[random].charAt(i)){
				guessArray[i] = $("#guessZone").val();
			}
			
		}
		
		
		
	});
	
	
	
	
});