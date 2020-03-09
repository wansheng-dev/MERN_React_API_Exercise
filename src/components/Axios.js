import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Axios (){

  const [ pokemonsa, setPokemonsa ] = useState([]);

  function getData(str) {
    axios.get(str)
      .then(({ data }) => {
        setPokemonsa([...pokemonsa, ...data.results]);

        if(data.next) {
          getData(data.next);
        }
      });
  }

  const handleClick = e => {
    e.preventDefault();
    getData('https://pokeapi.co/api/v2/pokemon/');
    // getData("https://pokeapi.co/api/v2/pokemon/")
    // .then(response => setPokemonsa(response.data.results))
    
  };

  // const handleClick = e => {
  //   e.preventDefault();
  //   axios.get("https://pokeapi.co/api/v2/pokemon/")
  //   .then(response => setPokemonsa(response.data.results))
    
  // };

  return (
    <div>
      <button onClick= {handleClick}> Axios Pokemon </button>
      { pokemonsa.map( (pokemona, index) => (
          <p key={index}> { pokemona.name } </p>
      )) }
      {console.log(typeof(pokemonsa))}
    </div>
  )

}

export default Axios;
