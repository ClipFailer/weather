// // Тип для локации
// export interface Location {
// 	name: string
// 	region: string
// 	country: string
// 	lat: number
// 	lon: number
// 	tz_id: string
// 	localtime_epoch: number
// 	localtime: string
// }

// // Тип для погодных условий
// export interface Condition {
// 	text: string
// 	icon: string
// 	code: number
// }

// // Тип для текущей погоды
// export interface Current {
// 	last_updated_epoch: number
// 	last_updated: string
// 	temp_c: number
// 	temp_f: number
// 	is_day: number
// 	condition: Condition
// 	wind_mph: number
// 	wind_kph: number
// 	wind_degree: number
// 	wind_dir: string
// 	pressure_mb: number
// 	pressure_in: number
// 	precip_mm: number
// 	precip_in: number
// 	humidity: number
// 	cloud: number
// 	feelslike_c: number
// 	feelslike_f: number
// 	vis_km: number
// 	vis_miles: number
// 	uv: number
// 	gust_mph: number
// 	gust_kph: number
// }

// // Основной тип для ответа API
// export interface WeatherResponse {
// 	location: Location
// 	current: Current
// }

// export enum ThemeEnum  {
// 	LIGHT = 'lightTheme',
// 	DARK = 'darkTheme',
// }

// types/weatherApiTypes.ts

// Состояние погоды (condition)
interface WeatherCondition {
	text: string
	icon: string
	code: number
}

// Данные о дневной погоде
interface DayWeather {
	maxtemp_c: number
	maxtemp_f: number
	mintemp_c: number
	mintemp_f: number
	avgtemp_c: number
	avgtemp_f: number
	maxwind_kph: number
	maxwind_mph: number
	totalprecip_mm: number
	totalprecip_in: number
	totalsnow_cm: number
	avgvis_km: number
	avgvis_miles: number
	avghumidity: number
	daily_will_it_rain: number
	daily_chance_of_rain: number
	daily_will_it_snow: number
	daily_chance_of_snow: number
	condition: WeatherCondition
	uv: number
}

// Данные астрономии (восход/закат)
interface Astro {
	sunrise: string
	sunset: string
	moonrise: string
	moonset: string
	moon_phase: string
	moon_illumination: number
	is_moon_up: number
	is_sun_up: number
}

// Почасовой прогноз (необязательно, если не используется)
interface HourWeather {
	time_epoch: number
	time: string
	temp_c: number
	temp_f: number
	is_day: number
	condition: WeatherCondition
	wind_kph: number
	wind_mph: number
	wind_degree: number
	wind_dir: string
	pressure_mb: number
	pressure_in: number
	precip_mm: number
	precip_in: number
	humidity: number
	cloud: number
	feelslike_c: number
	feelslike_f: number
	windchill_c: number
	windchill_f: number
	heatindex_c: number
	heatindex_f: number
	dewpoint_c: number
	dewpoint_f: number
	will_it_rain: number
	chance_of_rain: number
	will_it_snow: number
	chance_of_snow: number
	vis_km: number
	vis_miles: number
	gust_kph: number
	gust_mph: number
	uv: number
}

// Прогноз на один день
export interface ForecastDay {
	date: string
	date_epoch: number
	day: DayWeather
	astro: Astro
	hour: HourWeather[] // массив почасовых данных
}

// Локация
export interface Location {
	name: string
	region: string
	country: string
	lat: number
	lon: number
	tz_id: string
	localtime_epoch: number
	localtime: string
}

// Текущая погода
export interface Current {
	last_updated_epoch: number
	last_updated: string
	temp_c: number
	temp_f: number
	is_day: number
	condition: WeatherCondition
	wind_kph: number
	wind_mph: number
	wind_degree: number
	wind_dir: string
	pressure_mb: number
	pressure_in: number
	precip_mm: number
	precip_in: number
	humidity: number
	cloud: number
	feelslike_c: number
	feelslike_f: number
	vis_km: number
	vis_miles: number
	uv: number
	gust_kph: number
	gust_mph: number
}

// Полный ответ API для недельного прогноза
export interface WeatherResponse {
	location: Location
	current: Current
	forecast: {
		forecastday: ForecastDay[]
	}
}

export const months: Record<string, string> = {
	'01': 'Января',
	'02': 'Февраля',
	'03': 'Марта',
	'04': 'Апреля',
	'05': 'Мая',
	'06': 'Июня',
	'07': 'Июля',
	'08': 'Августа',
	'09': 'Сентября',
	'10': 'Октября',
	'11': 'Ноября',
	'12': 'Декабря',
}
