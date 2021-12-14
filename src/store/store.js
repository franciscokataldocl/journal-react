import { compose } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';



const composeEnhancers = (
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) 
    || compose;

/*combineReducers sirve para tener varios reducers 
y este se lo enviamos al create store */
const reducers = combineReducers({
    //estructura del store, manejada por authReducer
    auth: authReducer ,
    ui: uiReducer 
});
//CREAR LA TIENDA DE DATOS - INFORMACION
//AHORA PARA INDICARLE A REACT QUE TIENE UN STORE
//IMPORTAMOS STORE EN JOURNALAPP.JS
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
    );