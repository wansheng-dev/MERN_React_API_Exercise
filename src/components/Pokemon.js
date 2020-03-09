import React, { useState } from 'react';


function Pokemon (){

  const [ pokemons, setPokemons ] = useState([]);

  const handleClick = e => {
    e.preventDefault();
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(response => response.json())
    .then(response => setPokemons(response.results))
  };

  return (
    <div>
      <button onClick= {handleClick}> Fetch Pokemon </button>
      { pokemons.map( (pokemon, index) => (
          <p key={index}> { pokemon.name } </p>
      )) }
      {console.log(typeof(pokemons))}
    </div>
  )

}

export default Pokemon;
