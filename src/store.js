import { legacy_createStore as createStore } from 'redux';


//the initial state of the Redux store. likedPokemon initialized as an empty array.
const initialState = {
  likedPokemon: [],
};


//The reducer function takes the current state and an action as arguments, and returns the new state after the action "ADD_LIKED_POKEMON" perform, it adds a new liked Pokémon to the likedPokemon array.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LIKED_POKEMON':
      return {
        ...state,
        likedPokemon: [...state.likedPokemon, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
