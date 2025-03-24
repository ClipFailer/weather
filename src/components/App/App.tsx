import { Container, CssBaseline, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import store from '../../store/store'
import '../../styles/index.css'
import { darkTheme } from '../../styles/themes'
import Router from '../Router/Router'

export default function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Container sx={{ marginTop: 5 }}>
					<Router />
				</Container>
			</ThemeProvider>
		</Provider>
	)
}
