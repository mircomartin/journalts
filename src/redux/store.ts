import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk"
import { combineReducers } from "redux";

import authReducer from './reducers/authReducer';


declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    auth: authReducer
});

export const store = createStore(
    reducers,
    {},
    composeEnhancers(
        applyMiddleware(thunk)
    )
        
)
        
export type State = ReturnType<typeof reducers>
