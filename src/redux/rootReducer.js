import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import logInOutReducer from './logInOut/reducer';

const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["logInState"],
};

const rootReducer = combineReducers({
    logInState: logInOutReducer,
});

export default persistReducer(persistConfig, rootReducer);