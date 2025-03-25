import { Backdrop, CircularProgress, Grid2 } from '@mui/material'
import Paper from '@mui/material/Paper'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetWeatherQuery } from '../../services/weatherApi'
import { selectLocation, updateLocation } from '../../store/locationSlice'
import LocationForm from '../LocationForm/LocationForm'
import Modal from '../Modal/Modal'
import WeatherForecastBlock from '../WeatherForecastBlock/WeatherForecastBlock'
import WeatherLocationBlock from '../WeatherLocationBlock/WeatherLocationBlock'
import WeatherStatusBlock from '../WeatherStatusBlock/WeatherStatusBlock'

export default function Weather() {
	const [locationModal, setLocationModal] = useState(false)

	const dispatch = useDispatch()

	const location = useSelector(selectLocation)

	const { data, isLoading, error, isError } = useGetWeatherQuery(
		location || JSON.stringify(localStorage.getItem('location'))
	)

	const changeLocation = (e: React.FormEvent, newLocation: string) => {
		e.preventDefault()
		dispatch(updateLocation(newLocation))
		setLocationModal(false)
	}

	return (
		<div>
			<Paper elevation={10} sx={{ padding: 2 }}>
				<Grid2 container spacing={2}>
					<Grid2 sx={{ margin: 'auto' }}>
						<WeatherLocationBlock
							location={data?.location}
							setLocationModal={setLocationModal}
						/>
					</Grid2>
					<Grid2 size={12}>
						<WeatherStatusBlock current={data?.current} />
					</Grid2>
					<Grid2 size={12}>
						<WeatherForecastBlock
							forecast={data?.forecast.forecastday.slice(1)}
						/>
					</Grid2>
				</Grid2>
				<Backdrop open={isLoading}>
					<CircularProgress color="inherit" />
				</Backdrop>
			</Paper>

			{locationModal && (
				<Modal active={locationModal} setActive={setLocationModal}>
					<LocationForm onSubmit={changeLocation} />
				</Modal>
			)}
		</div>
	)
}
