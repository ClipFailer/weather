import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import { selectLocation } from '../../store/locationSlice'
import Weather from '../Weather/Weather'

export default function Router() {
	const location =
		useSelector(selectLocation) || localStorage.getItem('location')

	return (
		<Routes>
			<Route path="*" element={<HomePage />} />
			{location && <Route path="/weather" element={<Weather />} />}
		</Routes>
	)
}
