import { useState, useEffect } from "react";

import GameData from "@/api/GameData";
import Button from "@/components/Button";

const Filter = ({ setSearchParams }) => {
  const [search, setSearch] = useState("");
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const loadGenres = async () => {
      const genreData = await GameData.getGenres();
      setGenres(genreData);
    };
    loadGenres();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    const searchResults = await GameData.getGames({ search: search });
    setSearchParams(searchResults);
  };

  const handleFilter = async (genre) => {
    if (genre === "all") {
      const games = await GameData.getGames();
      setSearchParams(games);
    } else {
      const filteredGames = await GameData.getGames({ genres: genre });
      setSearchParams(filteredGames);
    }
  };

  return (
    <div className="flex items-center justify-start">
      <form onSubmit={handleSearch} className="relative mr-10">
        <input
          type="text"
          placeholder="Search..."
          className="input-search pr-20"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          type="submit"
          variant="primary"
          className="absolute right-0 top-0 bottom-0"
        >
          Search
        </Button>
      </form>

      <div className="flex gap-2">
        <Button variant="secondary" onClick={() => handleFilter("all")}>
          Alla
        </Button>
        {genres.map((genre) => (
          <Button key={genre.id} onClick={() => handleFilter(genre.id)}>
            {genre.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
