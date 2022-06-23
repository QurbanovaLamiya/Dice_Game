import React from "react";

export const Player1 = props => {
  const { one, two, three, four, five, six, player1Choise } = props.allstates;

  switch (player1Choise) {
    case 1:
      return (
        <div className="result">
          <div>Player 1:</div> <img alt="dice" width="50%" src={one} />
        </div>
      );
    case 2:
      return (
        <div className="result">
          <div>Player 1:</div> <img alt="dice" width="50%" src={two} />
        </div>
      );
    case 3:
      return (
        <div className="result">
          <div>Player 1:</div> <img alt="dice" width="50%" src={three} />
        </div>
      );
    case 4:
      return (
        <div className="result">
          <div>Player 1:</div> <img alt="dice" width="50%" src={four} />
        </div>
      );
    case 5:
      return (
        <div className="result">
          <div>Player 1:</div> <img alt="dice" width="50%" src={five} />
        </div>
      );
    case 6:
      return (
        <div className="result">
          <div>Player 1:</div> <img alt="dice" width="50%" src={six} />
        </div>
      );
    default:
      return null;
  }

};