import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import errorListReducer from './reducers/errorListReducer';
import errorDetailsReducer from './reducers/errorDetailsReducer';

import listReducer from './reducers/listReducer';
// import listWatcher from './sagas/listSaga';

import rootSaga from './sagas/rootSaga';
import detailsReducer from './reducers/detailsReducer';

const sagaMid = createSagaMiddleware();
export default configureStore({
  reducer: {
    errorList: errorListReducer,
    list: listReducer,
    errorDetails: errorDetailsReducer,
    details: detailsReducer,
  },
  middleware: (mid) => [...mid(), sagaMid],
});

sagaMid.run(rootSaga);
