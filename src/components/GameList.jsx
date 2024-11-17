import { useState, useEffect } from "react";

import gameAPI from "@/api/GameData";

const TableGame = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const games = await gameAPI();
      setGames(games);
    };
    getGames();
  }, []);

  return (
    <>
      {games.map((game) => (
        <div key={game.id}>
          <h1>{game.name}</h1>
          <p>{game.rating}</p>
          <div className="aspect-video relative">
            <img
              src={game.background_image}
              alt={game.name}
              className="object-cover rounded-md"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default TableGame;
