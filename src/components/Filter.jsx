import { useState, useEffect } from "react";

import GameData from "@/api/GameData";
import Button from "@/components/Button";

const Filter = ({ setSearchParams, setIsLoading }) => {
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
    setIsLoading(true);
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
    setIsLoading(false);
  };

  const handleYearChange = async (event) => {
    setIsLoading(true);
    const year = event.target.value;
    setSelectedYear(year);
    const dates = `${year}-01-01,${year}-12-31`;
    const games = await GameData.getGames({ dates });
    setSearchParams(games);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-start gap-4 md:flex-row">
      <form onSubmit={handleSearch} className="relative mb-4 md:mb-0 md:mr-10">
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

      <div className="grid grid-cols-2 gap-2 w-full md:flex md:flex-row md:w-auto md:gap-4">
        <Button
          variant="secondary"
          onClick={() => handleFilter("all")}
          className="w-full md:w-auto min-h-[40px] px-2"
        >
          Alla
        </Button>
        {genres.map((genre) => (
          <Button
            key={genre.id}
            onClick={() => handleFilter(genre.id)}
            className="w-full md:w-auto min-h-[40px] px-2"
          >
            {genre.name}
          </Button>
        ))}
      </div>

      <div className="mt-4 md:mt-0">
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="w-full md:ml-4 bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-900"
        >
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
