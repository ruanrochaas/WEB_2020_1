import { createStore, combineReducers} from 'redux';

const reducers = combineReducers({
    pokemonId: function(state, action){
        return {
            id:10
        };
    },
    pokemonNames: function(state,action){
        return [
            'Bulbasaur',
            'Pikachu',
            'Meow'
        ];
    }
});

function storeConfig(){
    return createStore(reducers)
};

export default storeConfig;