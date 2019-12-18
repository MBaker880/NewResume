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