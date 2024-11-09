export class Main {
  // FIRST LINE OF MINUTES
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

  // SECONF LINE OF MINUTES
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

  // SECOND LINE OF HOURS
  secondLineOfHours(minutes) {
    if (this.restOfDivisionBy5(minutes) == 0) return "----";
    if (this.restOfDivisionBy5(minutes) == 1) return "R---";
    if (this.restOfDivisionBy5(minutes) == 2) return "RR--";
    if (this.restOfDivisionBy5(minutes) == 3) return "RRR-";
    if (this.restOfDivisionBy5(minutes) == 4) return "RRRR";
  }

  // FIRST LINE OF HOURS
    firstLineOfHours(minutes) {
        if (minutes < 5) return "----";
        if (minutes < 10) return "R---";

    }
}
