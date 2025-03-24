import { Box, Button, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import { Location } from '../../types'

interface Props {
	location: Location | undefined
	setLocationModal: (value: boolean) => void
}

export default function WeatherLocationBlock({
	location,
	setLocationModal,
}: Props) {
	return (
		<Paper elevation={10} sx={{ padding: 2 }}>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<Typography variant="h4">
					<Button
						variant="text"
						sx={{ fontSize: '2rem' }}
						onClick={() => setLocationModal(true)}
					>
						{location?.name}, {location?.country}
					</Button>{' '}
					{location?.localtime.slice(-5)}
				</Typography>
			</Box>
		</Paper>
	)
}
