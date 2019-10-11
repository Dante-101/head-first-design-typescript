import { DisplayElement, Observer, Subject } from './interfaces'
import { WeatherData } from './weather-data-subject'

export class CurrentConditions implements Observer<WeatherData>, DisplayElement {
    private _data?: WeatherData

    constructor(private _subject: Subject<WeatherData>) {
        _subject.addObserver(this)
    }

    update(data: WeatherData) {
        this._data = data
        this.display()
    }

    stopUpdate() {
        this._subject.removeObserver(this)
    }

    updateSubject(subject: Subject<WeatherData>) {
        this._subject.removeObserver(this)
        this._subject = subject
    }

    display() {
        if (this._data) {
            console.log("Found current conditions: " + JSON.stringify(this._data))
        }
    }
}