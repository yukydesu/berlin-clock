// app.js
export class Main {

    // La ligne du bas est composée de 4 bloques jaunes représentant chacun une minute

    secondLineOfMinutes(minutes) {
        if (this.getFifteenMinuteQuarters(minutes) == 0) return "----";
        if (this.getFifteenMinuteQuarters(minutes) == 0.25) return "Y---";
        if (this.getFifteenMinuteQuarters(minutes) == 0.50) return "YY--";
        if (this.getFifteenMinuteQuarters(minutes) == 0.75) return "YYY-";
        if (this.getFifteenMinuteQuarters(minutes) == 1) return "YYYY";
    }

    getFifteenMinuteQuarters(minutes) {
        if(minutes == 0) return 0;
        if(minutes % 4 == 0) return 1;
        return (minutes / 4) % 1;
    }

}