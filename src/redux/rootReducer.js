import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import setAdminReducer from './setAdmin/reducer';
import boardReducer from './CRUD/reducer';
import reviseReducer from './CRUD/revise/reducer';
import handleModalReducer from './sortModal/reducer';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['adminMode',
                'board', // 보안 문제 고려
                'revise'],
};

const rootReducer = combineReducers({
    adminMode: setAdminReducer,
    board: boardReducer,
    revise: reviseReducer,
    modal: handleModalReducer
});

export default persistReducer(persistConfig, rootReducer);