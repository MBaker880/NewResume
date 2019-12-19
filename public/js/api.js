// pikachu
var _condition = "pokemon"
var _pocketmonster = "pikachu"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#pikachu');
    pokeIMG = `<img src="${img.front_default}" id="pikachu">`;
    selector.innerHTML = pokeIMG;
}
    );


       // charmander
  var _condition = "pokemon"
  var _pocketmonster = "charmander"
  
  fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
  .then( res => res.json())
  .then(data => {
      console.log(data.sprites)
      const {...img} = data.sprites;
      selector = document.querySelector('#charmander');
      pokeIMG = `<img src="${img.front_default}" id="charmander">`;
      selector.innerHTML = pokeIMG;
  }
      );

var unirest = require("unirest");

var req = unirest("GET", "https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf");
      
req.headers({
    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
	"x-rapidapi-key": "6ad87f66a8mshaec146d42942b3ep16a80djsn018f84fcce5a"
});
      
      
req.end(function (res) {
    if (res.error) throw new Error(res.error);
      
    console.log(res.body);
});
