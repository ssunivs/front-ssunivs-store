import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import logInOutReducer from './logInOut/reducer';
import joinReducer from './profile/reducer';
import boardReducer from './CRUD/reducer';

const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["logInOut"],
};

const rootReducer = combineReducers({
    logInOut: logInOutReducer,
    join: joinReducer,
    board: boardReducer
});

export default persistReducer(persistConfig, rootReducer);