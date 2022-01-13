import { createStore } from "redux";
import changeColorReducer from "./changeColor/reducer";

const store = createStore(changeColorReducer);

export default store;