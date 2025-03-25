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
			<Box
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', sm: 'row' },
					gap: { sm: '1rem' },
					alignItems: 'center',
					justifyContent: { xs: 'center', sm: 'space-around' },
				}}
			>
				<Button
					variant="text"
					sx={{ fontSize: { xs: '2rem' }, width: '70%', padding: '1rem' }}
					onClick={() => setLocationModal(true)}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						{location?.name}
						<Typography sx={{ display: { xs: 'none', sm: 'initial' } }}>
							{location?.country === 'Украина'
								? 'Хохляндия'
								: location?.country}
						</Typography>
					</Box>
				</Button>{' '}
				<Typography variant="h4" sx={{ fontSize: { sm: '3rem' } }}>
					{location?.localtime.slice(-5)}
				</Typography>
			</Box>
		</Paper>
	)
}
