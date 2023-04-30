import { combineReducers } from "redux";
import stateReducer from "./stateReducer"

const reducers = combineReducers({
    state: stateReducer
})

export default reducers;