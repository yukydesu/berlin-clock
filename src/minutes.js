export class Minutes {

    // La ligne du dessus représente des bloque de 5 minutes et elle est composée de 11 lampes. Toutes les 3 lampes nous avons une lampe rouge et les autres sont jaunes. 
 
    firstLineOfMinutes(minutes) {
        if (this.getFiveMinuteQuarters(minutes) < 1) return "-----------";
        if (this.getFiveMinuteQuarters(minutes) < 2) return "Y----------";
        if (this.getFiveMinuteQuarters(minutes) < 3) return "YY---------";
        if (this.getFiveMinuteQuarters(minutes) < 4) return "YYY--------";
        if (this.getFiveMinuteQuarters(minutes) < 5) return "YYYY-------";
        if (this.getFiveMinuteQuarters(minutes) < 6) return "YYYYY------";
        if (this.getFiveMinuteQuarters(minutes) < 7) return "YYYYYY-----";
        if (this.getFiveMinuteQuarters(minutes) < 8) return "YYYYYYY----";
        if (this.getFiveMinuteQuarters(minutes) < 9) return "YYYYYYYY---";
        if (this.getFiveMinuteQuarters(minutes) < 10) return "YYYYYYYYY--";
        if (this.getFiveMinuteQuarters(minutes) < 11) return "YYYYYYYYYY-";
        if (this.getFiveMinuteQuarters(minutes) < 12) return "YYYYYYYYYYY";
    }


    getFiveMinuteQuarters(minutes) {
        return minutes / 5;
    }


}