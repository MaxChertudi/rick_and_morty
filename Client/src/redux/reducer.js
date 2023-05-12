import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./types";

const initialState = {
    myFavorites: [],
    allCharacters: []
 };

 const Reducer = (state=initialState, action) => {

    switch (action.type) {

        case ADD_FAV:
            return { ...state, 
                    myFavorites: action.payload, 
                    allCharacters: action.payload };

        case REMOVE_FAV:
            return { ...state, 
                    myFavorites: action.payload };
            
        case FILTER: {
            let filterCharacter = state.allCharacters.filter
                (character => character.gender === action.payload);
            return {...state, 
                myFavorites: filterCharacter};
        }

        case ORDER: {
            const orderCharacter = state.allCharacters.sort((a, b)=> {
                if(action.payload === "Ascendente") {
                    if(a.id < b.id ) return -1;
                    if(b.id < a.id) return 1
                    return 0
                }
                else { // DESCENDENTE
                    if(a.id < b.id) return 1
                    if(b.id < a.id) return - 1
                    return 0
                }
            });
            return { ...state, myFavorites: [...orderCharacter] }
        }
        case 'reset': {
            initialState.myFavorites= []; 
            initialState.allCharacters= [];
        }

        default:
            return {...state};
    }
};

export default Reducer;