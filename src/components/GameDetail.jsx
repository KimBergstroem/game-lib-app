import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import GameData from "@/api/GameData";

const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const loadGameDetails = async () => {
      const gameData = await GameData.getGameDetails(id);
      setGame(gameData);
    };
    loadGameDetails();
  }, [id]);

  if (!game) return <div>Laddar...</div>;

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <h1 className="text-4xl font-bold text-white mb-6">{game.name}</h1>

      <div className="relative aspect-video mb-8">
        <img
          src={game.background_image}
          alt={game.name}
          className="rounded-lg object-cover w-full h-full shadow-xl"
        />
      </div>

      <div className="flex flex-wrap gap-6 text-white my-6">
        <div className="bg-gray-800 rounded-full px-4 py-2">
          <span className="text-gray-400">Rating:</span>
          <span className="font-bold text-lg ml-2">{game.rating}</span>
        </div>

        <div className="flex gap-2 flex-wrap px-4 py-2">
          {game.platforms.map((platform) => (
            <span
              key={platform.platform.id}
              className="bg-blue-900 px-3 py-1 rounded-full"
            >
              {platform.platform.name}
            </span>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap px-4 py-2">
          {game.genres.map((genre) => (
            <span
              key={genre.id}
              className="bg-indigo-900 px-3 py-1 rounded-full text-sm"
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-lg">
        <p className="text-gray-800 leading-relaxed whitespace-pre-line">
          {game.description_raw}
        </p>
      </div>
    </div>
  );
};

export default GameDetail;
