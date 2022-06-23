import React from "react";

export const Interface = props => {
  return (
    <>
      <div className="table" style={{ fontSize: "30px" }}>Player 1: {props.player1Choise}</div>
      <div className="table" style={{ fontSize: "30px" }}> Player 2: {props.player2Choise}</div>
      <button className="button" onClick={props.clearState}>Reset</button>
      <button className="button" onClick={props.startGame}>Click</button>
    </>
  );
};