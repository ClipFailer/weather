import { createSlice } from '@reduxjs/toolkit'
import { weatherApi } from '../services/weatherApi'
import { WeatherResponse } from '../types'

type InitialState = {
	data: WeatherResponse | null
	isLoading: boolean
	error: Error | unknown
}

const initialState: InitialState = {
	data: null,
	isLoading: false,
	error: null,
}

export const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addMatcher(
			weatherApi.endpoints.getCurrentWeather.matchPending,
			state => {
				state.error = null
				state.isLoading = true
			}
		)
		builder.addMatcher(
			weatherApi.endpoints.getCurrentWeather.matchFulfilled,
			(state, action) => {
				state.isLoading = false
				state.data = action.payload
			}
		)
		builder.addMatcher(
			weatherApi.endpoints.getCurrentWeather.matchRejected,
			(state, action) => {
				state.error = action.error.message
				state.isLoading = false
			}
		)
	},
})
