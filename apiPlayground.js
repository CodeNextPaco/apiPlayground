$(document).ready(function(){

	$("#getMeBtn").click(getHoliday);

});


function showAlert() {
	// body...

	alert("hey!");
	console.log("I'm touched!!!");
}

function getHoliday(){

	let baseUrl = 'https://holidayapi.pl/v1/holidays?'
	let country= 'RU'
	let year = '2018'
	let month = '12'

	//TODO: Compare the requestURL with the url 
	//How would you make this reqeuestURL respond to user input in your html file so anyone
	//can enter a query?

    let requestURL = `${baseUrl}country=${country}&year=${year}&month=${month}`; 

	let url = 'https://holidayapi.pl/v1/holidays?country=US&year=2018&month=12';

	$.getJSON( requestURL, function( data ) {
	  
	  // log response to the console
	  // check out how you can print out parts of the data if you know what to look for...
	   console.log(data);
	   console.log(data.holidays[1]);
	   console.log(data.holidays[1]['name']);
	     
	   //declare a variable and assign it a value to display from the data
	  //like:
	  let displayMe = data.holidays[1]['name'];
	  
	  //display it on the output element created in the .html file
	  $("#output1").html(displayMe);

	   
	});

}



/*********************

check out these no-auth , no key APIs!!!

 STAR WARS  .................... https://swapi.co/ 

 Fortnite  ....................  https://fortniteapi.com/

 Clash Royale  ................  https://github.com/martincarrera/clash-royale-api

 Joke API  ..................... https://github.com/15Dkatz/official_joke_api

 Magic: The Gathering  ......... https://magicthegathering.io/

 Deck of Cards API ...........   http://deckofcardsapi.com/

 xckd comics ................... https://xkcd.com/json.html

 Pokémon TCG ..................  https://pokemontcg.io/

 Rick and Morty ...............  https://rickandmortyapi.com/

 Random Taco .................   https://github.com/evz/tacofancy-api

 Song Lyrics .................   https://lyricsovh.docs.apiary.io/#

 Dog Api .....................   https://dog.ceo/dog-api/

 Holidays .....................  https://holidayapi.pl/documentation

 University domains ...........  https://github.com/Hipo/university-domains-list

 Metaweather ..................  https://www.metaweather.com/api/





 *********************/

