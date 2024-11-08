// app.js
import { Minutes } from './minutes.js';


export class Main {
    constructor() {
        this.minutesInstance = new Minutes();
    }

    getFirstLineOfMinutes(minutes) {
        return this.minutesInstance.firstLineOfMinutes(minutes);
    }

}
