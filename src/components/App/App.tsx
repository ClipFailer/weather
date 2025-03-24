import { Container, CssBaseline, ThemeProvider } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTheme, updateTheme } from '../../store/themeSlice'
import '../../styles/index.css'
import { getTheme } from '../../styles/themes'
import Header from '../Header/Header'
import Router from '../Router/Router'

export default function App() {
	const theme = useSelector(selectTheme)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(updateTheme(getTheme()))
	}, [])

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container sx={{ marginTop: 5 }}>
				<Header />
				<Router />
			</Container>
		</ThemeProvider>
	)
}
