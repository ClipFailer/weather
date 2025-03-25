import AirIcon from '@mui/icons-material/air'
import StraightenIcon from '@mui/icons-material/Straighten'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import { Box, Paper, Typography } from '@mui/material'
import { Current } from '../../types'

interface Props {
	current: Current | undefined
}

export default function WeatherStatusBlock({ current }: Props) {
	return (
		<Paper
			elevation={10}
			sx={{
				padding: '1rem',
				display: 'flex',
				flexDirection: { xs: 'column', md: 'row' },
				justifyContent: { xs: 'center', md: 'space-between' },
				alignItems: 'center',
			}}
		>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<Typography sx={{ fontSize: '3rem' }}>
					{Math.round(current?.temp_c || 0) > 0 ? '+' : ''}
					{Math.round(current?.temp_c || 0)}
					{'\u00b0'}
				</Typography>
				<img src={`${current?.condition.icon}`}></img>
				<Typography sx={{ fontSize: '1.4rem' }}>
					{current?.condition.text}
				</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				{Math.round(+current?.feelslike_c!) !==
					Math.round(+current?.temp_c!) && (
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Typography sx={{ fontSize: '1.5rem', textAlign: 'center' }}>
							Ощущается как{' '}
							{Math.round(current?.feelslike_c || 0) > 0 ? '+' : ''}
							{Math.round(current?.feelslike_c || 0)}
							{'\u00b0'}
						</Typography>
					</Box>
				)}
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						flexWrap: 'wrap',
						gap: '0.2rem 0.8rem',
					}}
				>
					<Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
						<AirIcon />
						{Math.round(current?.wind_mph! / 3.6)} м/с
					</Box>
					<Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
						<WaterDropIcon />
						{current?.humidity}%
					</Box>
					<Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
						<StraightenIcon />
						{Math.round(current?.pressure_in! * 25.4)} мм.рт.ст
					</Box>
				</Box>
			</Box>
		</Paper>
	)
}
