

const LikedPokemon = () => {
  // Retrieve liked Pokémon from localStorage
  const likedPokemon = JSON.parse(localStorage.getItem('likedPokemon')) || [];

  return (
    <div className='mx-auto px-4 md:px-8 md:w-[80vw]'>
      <h1 className='text-4xl font-bold'>Pokémon you have liked ❤️</h1>
      <div className="flex flex-wrap p-4 gap-4">
        {likedPokemon.map((pokemon, index) => (
          <div key={index} className="border-2 border-black dark:border-[#e6ebeb] rounded-xl bg-[#e6ebeb] dark:bg-[#1e1e23] dark:text-white w-[80%] p-4 max-h-72 sm:w-48">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name} className="mx-auto w-[70%] h-[70%]" />
            <h3 className="text-center text-xl mt-4">{pokemon.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedPokemon;
