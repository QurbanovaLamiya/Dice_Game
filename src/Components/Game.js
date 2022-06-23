import React from "react";

export const Game = props => {
  const { player1Choise, player2Choise } = props.results;


  if (player1Choise > player2Choise) {
    return <h1 className="won">Player 1 Won !!!</h1>;
  } else if (player2Choise > player1Choise) {
    return <h1 className="won">Player 2 Won !!! </h1>
  } else {
    return "";
  }
};