const GameData = async () => {
  const END_POINT = import.meta.env.VITE_API_KEY;

  try {
    const response = await fetch(END_POINT);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error.message);
    return [];
  }
};

export default GameData;
