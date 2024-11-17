import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import GameData from "@/api/GameData";

const TableGame = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const loadGames = async () => {
      const gamesData = await GameData.getGames();
      setGames(gamesData);
    };
    loadGames();
  }, []);

  return (
    <>
      {games.map((game) => (
        <div
          key={game.id}
          className="col-span-4 md:col-span-2 xl:col-span-1 bg-white p-6 rounded-md"
        >
          <h1>{game.name}</h1>
          <p className="text-sm font-bold mb-2">{game.rating}</p>
          <div className="aspect-video relative">
            <Link
              to={`/game/${game.id}`}
              className="aspect-video relative block"
            >
              <img
                src={game.background_image}
                alt={game.name}
                className="object-cover rounded-md w-full h-full"
              />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TableGame;
