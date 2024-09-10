import { useEffect, useState } from "react";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const useFetchPokemon = () => {
  const [data, setData] = useState([]);

  const fetchAbilities = async (data) => {
    console.log("data..", data);
    const updatedPokemon = data.map(async (item) => {
      const resp = await fetch(item.url);
      const abilities = await resp.json();
      return {
        ...item,
        abilities: abilities.abilities
      }
    });
    Promise.all(updatedPokemon)
    .then(resp => {
      console.log(resp);
      setData(resp);
    })
  }

  const fetchData = async () => {
    const resp = await fetch(API_URL);
    const result = await resp.json();
    fetchAbilities(result.results)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
  };
};

export default useFetchPokemon;
