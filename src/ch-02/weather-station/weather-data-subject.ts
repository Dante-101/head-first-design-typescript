import { Observer, Subject } from './interfaces'

export interface WeatherData {
    pressure: number
    temperature: number
    humidity: number
}

export class WeatherDataSubject implements Subject<WeatherData> {
    observers: Observer<WeatherData>[]
    data?: WeatherData

    constructor() {
        this.observers = []
    }

    addObserver(obj: Observer<WeatherData>): void {
        this.observers.push(obj)
    }

    removeObserver(obj: Observer<WeatherData>): void {
        const index = this.observers.findIndex(o => o === obj)
        if (index) {
            this.observers.splice(index, 1)
        }
    }

    notifyObservers(): void {
        if (this.data) {
            const data = this.data
            this.observers.forEach(o => o.update(data))
        }
    }

    setWeatherData(data: WeatherData) {
        this.data = data
        this.notifyObservers()
    }

    getWeatherData() {
        if (!this.data) throw new Error("No weather data present")
        return this.data
    }
}