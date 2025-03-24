import { FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LocationForm from '../../components/LocationForm/LocationForm'
import { updateLocation } from '../../store/locationSlice'

export default function HomePage() {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const onSubmit = (e: FormEvent<HTMLFormElement>, newLocation: string) => {
		e.preventDefault()
		dispatch(updateLocation(newLocation))
		navigate('/weather')
	}

	return (
		<div>
			<LocationForm onSubmit={onSubmit} />
		</div>
	)
}
