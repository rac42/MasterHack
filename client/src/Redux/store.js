import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./User/UserSlice.js";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import persistStore from "redux-persist/es/persistStore";

// Combine your reducers here
const rootReducer = combineReducers({
  user: userReducer,
});

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
  version: 1, // This version property helps in migrations if needed in future versions
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer, // Make sure to pass the persistedReducer here
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disabling the serializable check for redux-persist
    }),
});

// Set up persistor to be used with PersistGate in your app
export const persistor = persistStore(store);
