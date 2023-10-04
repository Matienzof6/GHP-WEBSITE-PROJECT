import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './redux/reducers';
import { composeWithDevTools } from "redux-devtools-extension";




const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    //applyMiddleware(...middleware) // Descomentar para modo deploy
    composeWithDevTools(applyMiddleware(...middleware)) // Descomentar para modo desarrollo
);


export default store;