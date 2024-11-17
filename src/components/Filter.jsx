import { useState, useEffect } from "react";

import GameData from "@/api/GameData";
import Button from "@/components/Button";

const Filter = ({ setSearchParams }) => {
  const [search, setSearch] = useState("");
  const [genres, setGenres] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2024");

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
    const dates = {
      2024: "2024-01-01,2024-12-31",
      2023: "2023-01-01,2023-12-31",
      2022: "2022-01-01,2022-12-31",
      2021: "2021-01-01,2021-12-31",
      2020: "2020-01-01,2020-12-31",
      2019: "2019-01-01,2019-12-31",
    };

    const baseParams = { dates: dates[selectedYear] };

    if (genre === "all") {
      const games = await GameData.getGames(baseParams);
      setSearchParams(games);
    } else {
      const filteredGames = await GameData.getGames({
        ...baseParams,
        genres: genre,
      });
      setSearchParams(filteredGames);
    }
  };

  const handleYearChange = async (event) => {
    const year = event.target.value;
    setSelectedYear(year);
    const dates = `${year}-01-01,${year}-12-31`;
    const games = await GameData.getGames({ dates });
    setSearchParams(games);
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
      <div>
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="ml-4 bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-900"
        >
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2023">2022</option>
          <option value="2023">2021</option>
          <option value="2023">2020</option>
          <option value="2023">2019</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
