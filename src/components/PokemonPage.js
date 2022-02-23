import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [cards, setCards] = useState([]);
  const [input, setInput] = useState('');

  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
      .then(resp=>resp.json())
      .then((cardObj)=>setCards(cardObj))
  }, [])

  const cardsToDisplay = cards.filter((card)=>{
    return card.name.includes(input.toLowerCase());
  })

  function onAddPokemon(newPoke){
    setCards([...cards, newPoke])
  }



  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={onAddPokemon}/>
      <br />
      <Search input={input} setInput={setInput}/>
      <br />
      <PokemonCollection cards={cardsToDisplay} setCards={setCards}/>
    </Container>
  );
}

export default PokemonPage;
