import { Box, Paper, Typography } from '@mui/material'
import { Current } from '../../types'

interface Props {
	current: Current | undefined
}

export default function WeatherStatusBlock({ current }: Props) {
	return (
		<Paper elevation={10} sx={{ padding: 2, fontSize: '2rem' }}>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				{Math.ceil(current?.temp_c || 0) > 0 ? '+' : ''}
				{Math.ceil(current?.temp_c || 0)}
				{'\u00b0'}, {current?.condition.text}
				<img src={`${current?.condition.icon}`}></img>
			</Box>
			<Typography>{current?.wind_mph} м/с ветер</Typography>
		</Paper>
	)
}
