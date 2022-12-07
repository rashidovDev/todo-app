import {applyMiddleware, combineReducers, createStore} from "redux";
import { developerReducer } from "./developerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    developers : developerReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))