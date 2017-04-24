$(document).ready(function(){
	
	var words = new Array("HANGMAN","GAME","JAVASCRIPT");
	
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
		if(badGuessCount<=6){
			guessedArray.push($("#guessZone").val().toUpperCase())
			$("#guessed").html(guessedArray);
		
			for(var i = 0; i<words[random].length+1; i++){
				console.log($("#guessZone").val().toUpperCase());
				console.log(words[random].charAt(i-1).toUpperCase());
				if($("#guessZone").val().toUpperCase() == words[random].charAt(i-1).toUpperCase()){
					
					console.log("Match: " + guessedChar);
					guessArray.splice(i-1,1,guessedChar);
					console.log(guessArray);
					$("#word").html(guessArray);
					badGuessBool = false;
				} 
				
					
			}
			
			if(badGuessBool == true){
				badGuessCount++;
				console.log(badGuessCount);
				$("#badGuesses").html(badGuessCount);
			}
			
			
			
			
		}
		badGuessBool = true;
	
	});
	
	
	
	
});