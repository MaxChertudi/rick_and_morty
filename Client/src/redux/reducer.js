import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./types";

const initialState = {
    myFavorites: [],
    allCharacters: []
 };

 const Reducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_FAV: 
            return {...state, 
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters, action.payload]};

        case REMOVE_FAV: {
            let deleteCharacter = state.myFavorites.filter
                (character => character.id !== Number(action.payload));
            return {...state, 
                myFavorites: deleteCharacter};
        }
            
        case FILTER: {
            let filterCharacter = state.allCharacters.filter
                (character => character.gender === action.payload);
            // console.log("filter:", filterCharacter);
            return {...state, 
                myFavorites: filterCharacter};
        }

        case ORDER: {
            if (action.payload === 'Ascendente') {
                return {...state, 
                    myFavorites: state.allCharacters.sort(function (a, b) {return a.id - b.id;})};
            } else {
                return {...state, 
                    myFavorites: state.allCharacters.reverse()};
            }
        }
        
        default:
            return {...state};
    }
};

export default Reducer;