import { Box, Paper, Typography } from '@mui/material'
import { ForecastDay, months } from '../../types'

interface Props {
	forecast: ForecastDay[] | undefined
}

export default function WeatherForecastBlock({ forecast }: Props) {
	return (
		<Paper
			elevation={10}
			sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}
		>
			{forecast?.map(f => {
				const date = f.date.split('-')
				const month = date[1]

				return (
					<Paper
						key={f.date}
						elevation={4}
						sx={{
							display: 'flex',
							flexDirection: 'column',
							padding: '1rem',
							margin: '0.5rem',
							alignItems: 'center',
							width: { sm: '30%', xs: '100%' },
						}}
					>
						<Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
							<Typography sx={{ fontSize: '1.8rem' }}>{date[2]}</Typography>
							<Typography>{months[month]}</Typography>
						</Box>
						<Box
							sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}
						>
							<Typography sx={{ fontSize: '1.8rem' }}>
								{Math.ceil(f.day.avgtemp_c || 0) > 0 ? '+' : ''}
								{Math.ceil(f.day.avgtemp_c || 0)}
								{'\u00b0'}
							</Typography>
							<img src={f.day.condition.icon} width={'50px'} alt="" />
						</Box>
					</Paper>
				)
			})}
		</Paper>
	)
}
