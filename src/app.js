export class Main {




    // SECONF LINE OF MINUTES
    secondLineOfMinutes(minutes) {
        if (this.restOfDivisionBy5(minutes) == 0) return "----";
        if (this.restOfDivisionBy5(minutes) == 1) return "R---";
        if (this.restOfDivisionBy5(minutes) == 2) return "RR--";
        if (this.restOfDivisionBy5(minutes) == 3) return "RRR-";
        if (this.restOfDivisionBy5(minutes) == 4) return "RRRR";
  
    }

    restOfDivisionBy5(minutes) {
        return minutes % 5;
    }
}
