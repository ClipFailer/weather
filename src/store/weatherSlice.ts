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
			weatherApi.endpoints.getWeather.matchPending,
			state => {
				state.error = null
				state.isLoading = true
			}
		)
		builder.addMatcher(
			weatherApi.endpoints.getWeather.matchFulfilled,
			(state, action) => {
				state.isLoading = false
				state.data = action.payload
			}
		)
		builder.addMatcher(
			weatherApi.endpoints.getWeather.matchRejected,
			(state, action) => {
				state.error = action.error.message
				state.isLoading = false
			}
		)
	},
})
