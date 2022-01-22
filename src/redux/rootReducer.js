import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import setAdminReducer from './setAdmin/reducer';
import boardReducer from './CRUD/reducer';

const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["adminMode",
                "board"], // 보안 문제 고려
};

const rootReducer = combineReducers({
    adminMode: setAdminReducer,
    board: boardReducer
});

export default persistReducer(persistConfig, rootReducer);