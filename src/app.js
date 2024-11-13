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

  // SECOND LINE OF HOURS
  secondLineOfHours(hours) {
    if (this.restOfDivisionBy5(hours) == 0) return "----";
    if (this.restOfDivisionBy5(hours) == 1) return "R---";
    if (this.restOfDivisionBy5(hours) == 2) return "RR--";
    if (this.restOfDivisionBy5(hours) == 3) return "RRR-";
    if (this.restOfDivisionBy5(hours) == 4) return "RRRR";
  }

  restOfDivisionBy5(number) {
    return number % 5;
  }

  // FIRST LINE OF HOURS
  firstLineOfHours(hours) {
    if (hours < 5) return "----";
    if (hours < 10) return "R---";
    if (hours < 15) return "RR--";
    if (hours < 20) return "RRR-";
    if (hours < 24) return "RRRR";
  }

  // LINE OF SECONDS
  lineOfSeconds(seconds) {
    if (this.isPair(seconds)) return "-";
    if (!this.isPair(seconds)) return "Y";
  }

  isPair(seconds) {
    return seconds % 2 === 0;
  }

  // BERLIN CLOCK
  berlinClock(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return (
      this.lineOfSeconds(seconds) +
      "\n" +
      this.firstLineOfHours(hours) +
      "\n" +
      this.secondLineOfHours(hours) +
      "\n" +
      this.firstLineOfMinutes(minutes) +
      "\n" +
      this.secondLineOfMinutes(minutes)
    );
  }
}
