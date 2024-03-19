import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'

import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist'
import persistReducer from 'redux-persist/es/persistReducer'
import contactsSlice from './contactsSlice'
import filtersSlice from './filtersSlice'

const persistConfig = {
	key: 'root',
	storage,
}
const persistedContactsReducer = persistReducer(persistConfig, contactsSlice)

const store = configureStore({
	reducer: {
		contacts: persistedContactsReducer,
		filters: filtersSlice,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export default store
export const persistor = persistStore(store)
