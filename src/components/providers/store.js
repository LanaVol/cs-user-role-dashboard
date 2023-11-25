import { configureStore } from "@reduxjs/toolkit";
import {
  PAUSE,
  PURGE,
  FLUSH,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistStore,
  PersistConfig,
} from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { positionReducer } from "./positions/positions.slice";

const persistAuthConfig = {
  key: "position",
  storage,
  whitelist: ["data"],
};

export const store = configureStore({
  reducer: {
    positions: persistReducer(persistAuthConfig, positionReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
