import { CurrentConditions } from './current-conditions'
import { ForecastConditions } from './forecast-conditions'
import { WeatherDataSubject } from './weather-data-subject'

console.log("\n", "**** Chapter 02 ****")

const weatherSubject = new WeatherDataSubject()
const currentConditions = new CurrentConditions(weatherSubject)
const forecastConditions = new ForecastConditions(weatherSubject)

weatherSubject.setWeatherData({ temperature: 25, pressure: 2, humidity: 40 })
console.log("Updating data...")
weatherSubject.setWeatherData({ temperature: 28, pressure: 3, humidity: 60 })