import { createStore } from "redux";
import logInOutReducer from "./logInOut/reducer";

//redux-persist
import { persistStore } from "redux-persist";

const store = createStore(logInOutReducer);

export const persistor = persistStore(store)
export default store;