import { configureStore } from "@reduxjs/toolkit";
import {
  PAUSE,
  PURGE,
  FLUSH,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistStore,
} from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { positionReducer } from "./positions/positions.slice";

/**
 * Action types to be ignored by the serializable check middleware.
 * @type {string[]}
 */
const ignoredActionTypes = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

/**
 * Configuration for persisting the Redux store.
 * @type {import('redux-persist').PersistConfig<any>}
 */
const persistConfig = {
  key: "position",
  storage,
  whitelist: ["data"],
};

/**
 * Root reducer configuration.
 * @type {Object}
 * @property {import('redux').Reducer} positions - Position reducer with persistence.
 */
const rootReducer = {
  positions: persistReducer(persistConfig, positionReducer),
};

/**
 * Redux store instance.
 * @type {import('@reduxjs/toolkit').EnhancedStore}
 */
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ignoredActionTypes,
      },
    }),
});

/**
 * Redux persistor instance.
 * @type {import('redux-persist').Persistor}
 */
export const persistor = persistStore(store);
