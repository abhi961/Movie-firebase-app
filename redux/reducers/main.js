import { combineReducers } from "redux";
import { MovieReducer } from "./MoviesReducers";

const rooted = combineReducers({
    MovieReducer,
})
export default rooted;