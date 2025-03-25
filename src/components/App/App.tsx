import { Container, CssBaseline, ThemeProvider } from '@mui/material'
import '../../styles/index.css'
import { lightTheme } from '../../styles/themes'
import Router from '../Router/Router'

export default function App() {
	// const theme = useSelector(selectTheme)
	// const dispatch = useDispatch()

	// useEffect(() => {
	// 	dispatch(updateTheme(getTheme()))
	// }, [])

	return (
		<ThemeProvider theme={lightTheme}>
			<CssBaseline />
			<Container sx={{ marginTop: 5 }}>
				<Router />
			</Container>
		</ThemeProvider>
	)
}
