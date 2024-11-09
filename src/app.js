export class Main {
  //          #
  // #### #### #### ####
  // ---- ---- ---- ----
  //# # # # # # - - - - -
  // #### ---- ---- ----

  // VARIABLES COLORS
  static RED_4 = "\x1b[31m####\x1b[0m ";
  static RED_1 = "\x1b[31m#\x1b[0m ";
  static YELLOW_4 = "\x1b[33m####\x1b[0m ";
  static YELLOW_1 = "\x1b[33m#\x1b[0m ";
  static NC_4 = "---- ";
  static NC_1 = "- ";

  // LINE OF SECONDS
  lineOfSeconds(seconds) {
    if (this.isPair(seconds)) return "          " + Main.NC_1 + "        ";
    if (!this.isPair(seconds)) return "          " + Main.YELLOW_1 +"        ";
  }


  // FIRST LINE OF HOURS
  firstLineOfHours(hours) {
    if (hours < 5) return " " + Main.NC_4 + Main.NC_4 + Main.NC_4 + Main.NC_4;
    if (hours < 10) return " " + Main.RED_4 + Main.NC_4 + Main.NC_4 + Main.NC_4;
    if (hours < 15) return " " + Main.RED_4 + Main.RED_4 + Main.NC_4 + Main.NC_4;
    if (hours < 20) return " " + Main.RED_4 + Main.RED_4 + Main.RED_4 + Main.NC_4;
    if (hours < 24) return " " + Main.RED_4 + Main.RED_4 + Main.RED_4 + Main.RED_4;
  }

  // SECOND LINE OF HOURS
  secondLineOfHours(hours) {
    if (this.restOfDivisionBy5(hours) == 0) 
        return " " + Main.NC_4 + Main.NC_4 + Main.NC_4 + Main.NC_4;
    if (this.restOfDivisionBy5(hours) == 1)
      return " " + Main.RED_4 + Main.NC_4 + Main.NC_4 + Main.NC_4;
    if (this.restOfDivisionBy5(hours) == 2)
      return " " + Main.RED_4 + Main.RED_4 + Main.NC_4 + Main.NC_4;
    if (this.restOfDivisionBy5(hours) == 3)
      return " " + Main.RED_4 + Main.RED_4 + Main.RED_4 + Main.NC_4;
    if (this.restOfDivisionBy5(hours) == 4)
      return " " + Main.RED_4 + Main.RED_4 + Main.RED_4 + Main.RED_4;
  }


  // FIRST LINE OF MINUTES
  firstLineOfMinutes(minutes) {
    if (this.getFiveMinuteQuarters(minutes) < 1) 
        return Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1;
    if (this.getFiveMinuteQuarters(minutes) < 2) 
        return Main.YELLOW_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1;
    if (this.getFiveMinuteQuarters(minutes) < 3) 
        return Main.YELLOW_1 + Main.YELLOW_1+ Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1;
    if (this.getFiveMinuteQuarters(minutes) < 4) 
        return Main.YELLOW_1 + Main.YELLOW_1+ Main.RED_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1;
    if (this.getFiveMinuteQuarters(minutes) < 5) 
        return Main.YELLOW_1 + Main.YELLOW_1+ Main.RED_1 + Main.YELLOW_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1;
    if (this.getFiveMinuteQuarters(minutes) < 6) 
        return Main.YELLOW_1 + Main.YELLOW_1+ Main.RED_1 + Main.YELLOW_1 + Main.YELLOW_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1;
    if (this.getFiveMinuteQuarters(minutes) < 7) 
        return Main.YELLOW_1 + Main.YELLOW_1+ Main.RED_1 + Main.YELLOW_1 + Main.YELLOW_1 + Main.RED_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1;
    if (this.getFiveMinuteQuarters(minutes) < 8) 
        return Main.YELLOW_1 + Main.YELLOW_1+ Main.RED_1 + Main.YELLOW_1 + Main.YELLOW_1 + Main.RED_1 + Main.YELLOW_1 + Main.NC_1 + Main.NC_1 + Main.NC_1 + Main.NC_1;
    if (this.getFiveMinuteQuarters(minutes) < 9) 
        return Main.YELLOW_1 + Main.YELLOW_1+ Main.RED_1 + Main.YELLOW_1 + Main.YELLOW_1 + Main.RED_1 + Main.YELLOW_1 + Main.YELLOW_1 + Main.NC_1 + Main.NC_1 + Main.NC_1;
    if (this.getFiveMinuteQuarters(minutes) < 10) 
        return + Main.YELLOW_1 + Main.YELLOW_1+ Main.RED_1 + Main.YELLOW_1 + Main.YELLOW_1 + Main.RED_1 + Main.YELLOW_1 + Main.YELLOW_1 + Main.RED_1 + Main.NC_1 + Main.NC_1;
    if (this.getFiveMinuteQuarters(minutes) < 11) 
        return Main.YELLOW_1 + Main.YELLOW_1+ Main.RED_1 + Main.YELLOW_1 + Main.YELLOW_1 + Main.RED_1 + Main.YELLOW_1 + Main.YELLOW_1 + Main.RED_1 + Main.YELLOW_1 + Main.NC_1;
    if (this.getFiveMinuteQuarters(minutes) < 12) 
        return Main.YELLOW_1 + Main.YELLOW_1+ Main.RED_1 + Main.YELLOW_1 + Main.YELLOW_1 + Main.RED_1 + Main.YELLOW_1 + Main.YELLOW_1 + Main.RED_1 + Main.YELLOW_1 + Main.YELLOW_1;
  }


  // SECONF LINE OF MINUTES
  secondLineOfMinutes(minutes) {
    if (this.restOfDivisionBy5(minutes) == 0) return " " + Main.NC_4 + Main.NC_4 + Main.NC_4 + Main.NC_4;
    if (this.restOfDivisionBy5(minutes) == 1) return "" + Main.YELLOW_4 + Main.NC_4 + Main.NC_4 + Main.NC_4;
    if (this.restOfDivisionBy5(minutes) == 2) return " " + Main.YELLOW_4 + Main.YELLOW_4 + Main.NC_4 + Main.NC_4;
    if (this.restOfDivisionBy5(minutes) == 3) return " " + Main.YELLOW_4 + Main.YELLOW_4 + Main.YELLOW_4 + Main.NC_4;
    if (this.restOfDivisionBy5(minutes) == 4) return " " + Main.YELLOW_4 + Main.YELLOW_4 + Main.YELLOW_4 + Main.YELLOW_4;
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

  isPair(seconds) {
    return seconds % 2 === 0;
  }

  restOfDivisionBy5(number) {
    return number % 5;
  }

  getFiveMinuteQuarters(minutes) {
    return minutes / 5;
  }
}
