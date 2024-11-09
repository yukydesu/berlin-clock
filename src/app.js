// app.js
export class Main {

    // La ligne du bas est composée de 4 bloques jaunes représentant chacun une minute

    secondLineOfMinutes(minutes) {
        if (this.restOfDivisionBy5(minutes) == 0) return "----";
        if (this.restOfDivisionBy5(minutes) == 1) return "Y---";
        if (this.restOfDivisionBy5(minutes) == 2) return "YY--";
        if (this.restOfDivisionBy5(minutes) == 3) return "YYY-";
        if (this.restOfDivisionBy5(minutes) == 4) return "YYYY";
  
    }

    restOfDivisionBy5(minutes) {
        return minutes % 5;
    }
}
