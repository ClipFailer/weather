import { createTheme } from '@mui/material'

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#90caf9', // Основной цвет
		},
		secondary: {
			main: '#f48fb1', // Вторичный цвет
		},
		background: {
			default: '#121212', // Цвет фона
			paper: '#1e1e1e', // Цвет для бумажных поверхностей
		},
		text: {
			primary: '#ffffff', // Основной цвет текста
			secondary: '#b3b3b3', // Вторичный цвет текста
		},
	},
})

export const lightTheme = createTheme({
	palette: {
		mode: 'light', // Режим светлой темы
		primary: {
			main: '#1976d2', // Основной цвет
		},
		secondary: {
			main: '#dc004e', // Вторичный цвет
		},
		background: {
			default: '#ffffff', // Цвет фона
			paper: '#f5f5f5', // Цвет для бумажных поверхностей
		},
		text: {
			primary: '#000000', // Основной цвет текста
			secondary: '#757575', // Вторичный цвет текста
		},
	},
})
