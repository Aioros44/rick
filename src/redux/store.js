import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

const composeEnhancer=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;//esta linea e spara conectar con la extension del navegador>>> Redux DEVTOOLS

const store = createStore(
reducer,
composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;