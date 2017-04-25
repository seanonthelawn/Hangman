$(document).ready(function(){
	
	var words = new Array("HANGMAN","GAME","JAVASCRIPT","BANANA", "SEAN", "APPLE", "KUMKWAT", "FUNCTION", "ADVENTURE", "CODING", "DOLPHIN", "HAMBURGER");
	
	var random = Math.floor((Math.random()*(words.length)));
	
	var guessArray = [];
	
	var guessedArray = [];
	
	var guessedChar;
	
	var badGuessCount = 0;
	
	var badGuessBool = true;
	
	for(var i = 0; i<words[random].length; i++){
		 guessArray.push("_ ");
	}
	
	$("#word").html(guessArray);
	
	$("#guess").click(function() {
	
	guessedChar = ($("#guessZone").val().toUpperCase())
		if(badGuessCount<6 && guessedArray.join("") != words[random]){
			guessedArray.push($("#guessZone").val().toUpperCase())
			$("#guessed").html(guessedArray);
		
			for(var i = 0; i<words[random].length+1; i++){
				
				if($("#guessZone").val().toUpperCase() == words[random].charAt(i-1).toUpperCase()){
					
					
					guessArray.splice(i-1,1,guessedChar);
					
					$("#word").html(guessArray);
					badGuessBool = false;
				} 
				
					
			}
			
			if(badGuessBool == true){
				badGuessCount++;
				
				$("#badGuesses").html(badGuessCount);
			}
			
			
			
			
		}
		badGuessBool = true;
		
		if(badGuessCount >= 6){
			guessArray = words[random];
			$("#word").html(guessArray);
			$("#badGuesses").html("6<BR>You lose, Refresh to try again.");
		} else if(badGuessCount < 6){
			if(guessArray.join('') == words[random]) {
				$("#badGuesses").html("You win, Refresh to try again.");
				
				
			}
			
			
		}
	
	});
	
});