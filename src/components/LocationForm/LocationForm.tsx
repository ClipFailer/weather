import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { ChangeEvent, FormEvent, useState } from 'react'

const modalStyles = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4,
}

interface Props {
	onSubmit: (e: FormEvent<HTMLFormElement>, location: string) => void
}

export default function LocationForm({ onSubmit }: Props) {
	const [location, setLocation] = useState('')

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setLocation(e.target.value)
	}

	return (
		<Paper
			sx={modalStyles}
			component={'form'}
			onSubmit={e => onSubmit(e, location)}
		>
			<Stack spacing={2}>
				<Typography variant="h5">Выберите локацию</Typography>
				<TextField
					name="location"
					label="Локация"
					variant="outlined"
					value={location}
					onChange={onChange}
				/>
				<Button variant="contained" type="submit">
					Выбрать
				</Button>
			</Stack>
		</Paper>
	)
}
