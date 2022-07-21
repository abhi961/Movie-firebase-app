import { legacy_createStore } from "redux";
import rooted from "./reducers/main";

const store = legacy_createStore(rooted,)
export default store;