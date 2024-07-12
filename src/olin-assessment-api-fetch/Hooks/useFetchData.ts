import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Ability {
  ability: { name: string; url: string };
  slot: number;
}

interface PokemonData {
  abilities: Ability[];
  height: number;
  weight: number;
}

const useFetchData = () => {
  const { data, isLoading, error } = useQuery<PokemonData>({
    queryKey: ["pokemon"],
    queryFn: async () => {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon/arcanine");
      return res.data;
    },
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetchData;
