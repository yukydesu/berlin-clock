// app.js
export class Main {

 // La ligne du dessus représente des bloque de 5 minutes et elle est composée de 11 lampes. Toutes les 3 lampes nous avons une lampe rouge et les autres sont jaunes. 
 
 firstLineOfMinutes(minutes) {
    if (this.getFiveMinuteQuarters(minutes) < 2) return "Y----------";
    if (this.getFiveMinuteQuarters(minutes) < 3) return "YY---------";
    if (this.getFiveMinuteQuarters(minutes) < 4) return "YYR--------";
    if (this.getFiveMinuteQuarters(minutes) < 5) return "YYRY-------";
    if (this.getFiveMinuteQuarters(minutes) < 6) return "YYRYY------";
    if (this.getFiveMinuteQuarters(minutes) < 7) return "YYRYYR-----";
    if (this.getFiveMinuteQuarters(minutes) < 8) return "YYRYYRY----";
    if (this.getFiveMinuteQuarters(minutes) < 9) return "YYRYYRYY---";
    if (this.getFiveMinuteQuarters(minutes) < 10) return "YYRYYRYYR--";
    if (this.getFiveMinuteQuarters(minutes) < 11) return "YYRYYRYYRY-";
    if (this.getFiveMinuteQuarters(minutes) < 12) return "YYRYYRYYRYY";
}

// La ligne du bas est composée de 4 bloques jaunes représentant chacun une minute

secondLineOfMinutes(minutes) {
    if (minutes == 0) return "----";
    if (this.getFifteenMinuteQuarters(minutes) == 1) return "Y---";
    if (this.getFifteenMinuteQuarters(minutes) == 2) return "YY--";
    if (this.getFifteenMinuteQuarters(minutes) == 3) return "YYY-";
    if (this.getFifteenMinuteQuarters(minutes) == 0) return "YYYY";
}

getFiveMinuteQuarters(minutes) {
    return minutes / 5;
}

getFifteenMinuteQuarters(minutes) {
    return minutes / 4;
}

}
