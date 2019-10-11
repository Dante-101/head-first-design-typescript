export interface Subject<T> {
    addObserver(obj: Observer<T>): void
    removeObserver(obj: Observer<T>): void
    notifyObservers(): void
}

export interface Observer<T> {
    update(data: T): void
}

export interface DisplayElement {
    display(): void
}