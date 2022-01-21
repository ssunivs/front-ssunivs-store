import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import setAdminReducer from './setAdmin/reducer';
import joinReducer from './profile/reducer';
import boardReducer from './CRUD/reducer';

const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["adminMode"],
};

const rootReducer = combineReducers({
    adminMode: setAdminReducer,
    join: joinReducer,
    board: boardReducer
});

export default persistReducer(persistConfig, rootReducer);