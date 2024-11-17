import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import GameData from "@/api/GameData";
import Filter from "@/components/Filter";
import Button from "@/components/Button";
import GameListSkeleton from "@/components/skeletons/GameListSkeleton";

const GameList = () => {
  const [games, setGames] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const loadGames = async () => {
      const gamesData = await GameData.getGames();
      setGames(gamesData);
      setIsLoading(false);
    };
    loadGames();
  }, []);

  const GameCard = ({ game }) => (
    <div className="col-span-4 md:col-span-2 xl:col-span-1 bg-white p-6 rounded-md flex flex-col">
      <h1 className="text-xl font-bold mb-2 line-clamp-2 h-14">{game.name}</h1>
      <p className="text-sm font-bold mb-2">Rating: {game.rating}</p>
      <div className="aspect-video relative">
        <Link to={`/game/${game.id}`} className="aspect-video relative block">
          <img
            src={game.background_image}
            alt={game.name}
            className="object-cover rounded-md w-full h-full"
          />
        </Link>
      </div>
      <div className="mt-4">
        <Button
          variant="primary"
          className="px-3 py-1.5 text-sm"
          size="small"
          fullWidth
          onClick={() => navigate(`/game/${game.id}`)}
        >
          View Details
        </Button>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <>
        <div className="m-24">
          <Filter
            setSearchParams={setSearchParams}
            setIsLoading={setIsLoading}
          />
        </div>
        <GameListSkeleton />
      </>
    );
  }

  return (
    <>
      <div className="m-24">
        <Filter setSearchParams={setSearchParams} setIsLoading={setIsLoading} />
      </div>
      <div className="m-24 rounded-md grid grid-cols-4 gap-10">
        {(searchParams || games).map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameList;
