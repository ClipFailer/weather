import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

type InitialState = {
	location: string
}

const initialState: InitialState = {
	location: '',
}

export const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {
		updateLocation(state, action: PayloadAction<string>) {
			state.location = action.payload
			localStorage.setItem('location', action.payload)
		},
	},
})

export default locationSlice.reducer
export const { updateLocation } = locationSlice.actions

export const selectLocation = (state: RootState) => state.locationSlice.location
