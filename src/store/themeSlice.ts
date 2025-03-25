import { createSlice } from '@reduxjs/toolkit'
import { lightTheme, Theme } from '../styles/themes'

type InitialState = {
	theme: Theme
}

const initialState: InitialState = {
	theme: lightTheme,
}

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		updateTheme(state, action) {
			state.theme = action.payload
		},
	},
})

export default themeSlice.reducer

// export const selectTheme = (state: RootState) => state.themeSlice.theme

export const { updateTheme } = themeSlice.actions
