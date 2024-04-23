import { useState, useEffect } from "react";
import useTheme  from "../contexts/theme"

const PokemonCard = ({ setCurrentView }) => {
  const [pokemon, setPokemon] = useState(null);
  const {mode, darkTheme, lightTheme} = useTheme()


  //This useEffect hook runs once when the component mounts. It calls the fetchNewPokemon function to fetch a new pokemon.
  useEffect(() => {
    fetchNewPokemon();
  }, []);

  // Funtion to fetch new pokemon & set them into usestate
  const fetchNewPokemon = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${getRandomId()}`
      );
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    }
  };

  //generate random id to fetch random pokemon evertime
  const getRandomId = () => {
    return Math.floor(Math.random() * 1000) + 1; 
  };


  //function handleLike is triggered when the we clicks the "Like" button. It retrieves the liked Pokémon from localStorage, adds the current pokemon to the list, and stores the updated list back to localStorage. After that, it fetches a new pokemon.
  const handleLike = async () => {
    try {
      // Store liked Pokémon data in localStorage 
      const likedPokemon =
        JSON.parse(localStorage.getItem("likedPokemon")) || [];
      likedPokemon.push(pokemon);
      localStorage.setItem("likedPokemon", JSON.stringify(likedPokemon));
    } catch (error) {
      console.error("Error handling like:", error);
    }
    // Fetch a new Pokémon
    fetchNewPokemon();
  };

  //When click on the dislike button , this function call and fetch new pokemon
  const handleDislike = () => {
    // Fetch a new Pokémon
    fetchNewPokemon();
  };

  return (
    <div className="w-full">
      {pokemon && (
        <div
          className={`relative flex flex-col justify-start items-start p-6 w-full mx-auto md:w-[30vw] h-[80vh] text-black dark:text-white border-2 border-black dark:border-[#e6ebeb] rounded-3xl bg-[#e6ebeb] dark:bg-[#1e1e23]`}
        >
          <div
            className="absolute top-5 right-5 ml-auto w-20 h-20 rounded-full border border-black bg-pink-400 flex justify-center items-center"
            onClick={() => {
              if (mode == "light") {
                darkTheme();
              } else {
                lightTheme();
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              fill={`${mode == "light" ? "white" : "black"}`}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <div className="w-full flex flex-col gap-1">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`}
              alt={pokemon.name}
              className="w-[60%] h-[40vh] mx-auto"
            />
            <h2 className="text-center text-4xl font-medium my-1">
              {pokemon.name}
            </h2>
            <div className="flex flex-1 gap-2 flex-wrap py-2 justify-center">
              {pokemon.abilities.map((ability, index) => (
                <span
                  key={index}
                  className="p-1 rounded-md border-2 border-black dark:border-[#e6ebeb] text-xl bg-[#ffd237]"
                >
                  {ability.ability.name}
                </span>
              ))}

              {pokemon.types.map((type, index) => (
                <span
                  key={index}
                  className="p-1 rounded-md border-2 border-black dark:border-[#e6ebeb] text-xl bg-[#37c8d7]"
                >
                  {type.type.name}
                </span>
              ))}
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleDislike}
                className="px-4 py-2 rounded-xl border-2 border-black dark:border-[#e6ebeb] text-xl font-medium bg-[#ff8787]"
              >
                Dislike
              </button>
              <button
                onClick={handleLike}
                className="px-4 py-2 border-2 border-black dark:border-[#e6ebeb] rounded-xl text-xl font-medium bg-[#69d778]"
              >
                Like
              </button>
              <button
                onClick={() => setCurrentView("liked")}
                className="px-4 py-2 border-2 border-black dark:border-[#e6ebeb] rounded-xl text-xl font-medium bg-red-500"
              >
                LikedPokemon
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
