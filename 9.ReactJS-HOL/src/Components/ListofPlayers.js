import React from "react";

function ListofPlayers() {
  const players = [
    { name: "Virat", score: 90 },
    { name: "Rohit", score: 45 },
    { name: "Gill", score: 82 },
    { name: "Rahul", score: 60 },
    { name: "Hardik", score: 75 },
    { name: "Jadeja", score: 50 },
    { name: "Pant", score: 95 },
    { name: "Bumrah", score: 30 },
    { name: "Shami", score: 72 },
    { name: "Siraj", score: 55 },
    { name: "Kuldeep", score: 80 }
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>

      {players.map((player, index) => (
        <p key={index}>
          {player.name} - {player.score}
        </p>
      ))}

      <h2>Players with score below 70</h2>

      {lowScorers.map((player, index) => (
        <p key={index}>
          {player.name} - {player.score}
        </p>
      ))}
    </div>
  );
}

export default ListofPlayers;