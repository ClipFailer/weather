import { configureStore } from '@reduxjs/toolkit'
import { weatherApi } from '../services/weatherApi'
import locationSlice from './locationSlice'

const store = configureStore({
	reducer: {
		[weatherApi.reducerPath]: weatherApi.reducer,
		locationSlice,
		// themeSlice,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(weatherApi.middleware),
})

export default store

export type RootState = ReturnType<typeof store.getState>
