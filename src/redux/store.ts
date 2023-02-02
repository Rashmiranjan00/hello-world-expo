import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistCombineReducers, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import createSecureStore from "redux-persist-expo-securestore";

import authReducer from "./auth/authSlice";

// Secure storage
const secureStorage = createSecureStore();

export const securePersistConfig = {
  key: "secure",
  version: 1,
  storage: secureStorage
};

export const mainPersistConfig = {
  key: "main",
  version: 1,
  storage: AsyncStorage
};

export const persistedSecureReducer = persistCombineReducers(securePersistConfig, { auth: authReducer }); // For Auth reducer
export const persistedMainReducer = persistCombineReducers(mainPersistConfig, {});

const rootReducer = combineReducers({
  secure: persistedSecureReducer,
  main: persistedMainReducer
});

const store = configureStore({
  reducer: rootReducer,
  // middleware option needs to be provided for avoiding the error. ref: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        warnAfter: 100
      },
      immutableCheck: { warnAfter: 100 }
    })
});

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
