import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { WeatherResponse } from '../types'

const WEATHER_API = import.meta.env.VITE_WEATHER_API_KEY
const BASE_URL = 'https://api.weatherapi.com/v1/'

export const weatherApi = createApi({
	reducerPath: 'weatherApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: builder => ({
		getCurrentWeather: builder.query<WeatherResponse, string>({
			query: (city: string) => ({
				url: '/current.json',
				method: 'GET',
				params: {
					key: WEATHER_API,
					q: city,
					aqi: 'no',
					lang: 'ru',
				},
			}),
		}),
	}),
})

export const {
	endpoints: { getCurrentWeather },
} = weatherApi

export const { useGetCurrentWeatherQuery } = weatherApi
