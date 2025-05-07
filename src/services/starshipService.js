const BASE_URL = `https://swapi.info/api`;

const index = async () => {
  try {
    const response = await fetch(BASE_URL + "/starships");
    if (!response.ok) {
      throw new Error("Failed to fetch starships.");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export { index };
