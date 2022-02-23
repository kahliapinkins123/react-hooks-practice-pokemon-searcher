import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ cards }) {
  
  const cardList = cards.map((card)=>{
    return <PokemonCard key={card.id} card={card}/>
  })

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {cardList}
    </Card.Group>
  );
}

export default PokemonCollection;
