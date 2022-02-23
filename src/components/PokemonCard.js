import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ card }) {
  const [inFront, setInFront] = useState(true);
  const front=  card.sprites.front;
  const back = card.sprites.back;

  function toggle(){
    setInFront(!inFront);
  }

  return (
    <Card>
      <div onClick={toggle}>
        <div className="image">
          {inFront ? <img alt={card.name} src={front}/> : <img alt={card.name} src={back}/>}
        </div>
        <div className="content">
          <div className="header">{card.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {card.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
