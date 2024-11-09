export class Main {

    // La ligne du dessus représente des bloque de 5 minutes et elle est composée de 11 lampes. Toutes les 3 lampes nous avons une lampe rouge et les autres sont jaunes. 
 
    firstLineOfMinutes(minutes) {
        if (this.getFiveMinuteQuarters(minutes) < 1) return "-----------";
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


    getFiveMinuteQuarters(minutes) {
        return minutes / 5; 
    }

}
