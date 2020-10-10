import { createStore, combineReducers} from 'redux';

const initialState = {
    valorNumber1: 0,
    valorNumber2: 0
};

const reducers = combineReducers({
    number1: function(state = initialState, action){
        switch (action.type) {
            case 'NOVO_NUMERO1':
                return {
                    ...state,
                    valorNumber1: Number(action.payload)
                };
        
            default:
                return {
                    valorNumber1: Number(state.valorNumber1)
                };
        }
    },
    number2: function(state = initialState, action){
        switch (action.type) {
            case 'NOVO_NUMERO2':
                return {
                    ...state,
                    valorNumber2: Number(action.payload)
                };
        
            default:
                return {
                    valorNumber2: Number(state.valorNumber2)
                };
        }
    }
});

function storeConfig(){
    return createStore(reducers)
};

export default storeConfig;