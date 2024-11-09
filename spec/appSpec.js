import { Main } from "../src/app.js";

const timestamp = 1672501199; // 16:39:59
//const timestamp = 1731192959; // 23:55:59
//const timestamp = 1731193199; // 23:59:59
//const timestamp = 1731106800; // 00:00:00

const date = new Date(timestamp * 1000);
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

// FIRST LINE OF MINUTES
describe("testing the first line of minutes", function () {
  // arrange
  let main = new Main();

  it("should return the first line of minutes", function () {
    // act
    let result = main.firstLineOfMinutes(0);
    // assert
    expect(result).toBe("-----------"); // 0 / 5 = 0
  });

  it("should return the first line of minutes", function () {
    let result = main.firstLineOfMinutes(1);

    expect(result).toBe("-----------"); // 1 / 5 = 0.2
  });

  it("should return the first line of minutes", function () {
    let result = main.firstLineOfMinutes(4);

    expect(result).toBe("-----------"); // 4 / 5 = 0.8
  });

  it("should return the first line of minutes", function () {
    let result = main.firstLineOfMinutes(5); // 5 / 5 = 1

    expect(result).toBe("Y----------");
  });

  it("should return the first line of minutes", function () {
    // 10 / 5 = 2
    let result = main.firstLineOfMinutes(10);

    expect(result).toBe("YY---------");
  });

  it("should return the first line of minutes", function () {
    // 15 / 5 = 3
    let result = main.firstLineOfMinutes(15);

    expect(result).toBe("YYR--------");
  });

  it("should return the first line of minutes", function () {
    // 20 / 5 = 4
    let result = main.firstLineOfMinutes(20);

    expect(result).toBe("YYRY-------");
  });

  it("should return the first line of minutes", function () {
    let result = main.firstLineOfMinutes(5 * 11); // 55 / 5 = 11

    expect(result).toBe("YYRYYRYYRYY");
  });

  it("should return the first line of minutes", function () {
    let result = main.firstLineOfMinutes(minutes); // minutes = 39 => 39 / 5 = 7.8

    expect(result).toBe("YYRYYRY----");
  });
});

// SECOND LINE OF MINUTES
describe("testing the second line of minutes", function () {
  // arrange
  let main = new Main();

  it("with 0 => should return '----''", function () {
    // act
    let result = main.secondLineOfMinutes(0);
    // assert
    expect(result).toBe("----");
  });

  it("with 1 => should return 'Y---''", function () {
    // act
    let result = main.secondLineOfMinutes(1);
    // assert
    expect(result).toBe("Y---");
  });

  it("with 2 => should return 'YY--''", function () {
    // act
    let result = main.secondLineOfMinutes(2);
    // assert
    expect(result).toBe("YY--");
  });

  it("with 3 => should return 'YYY-''", function () {
    // act
    let result = main.secondLineOfMinutes(3);
    // assert
    expect(result).toBe("YYY-");
  });

  it("with 4 => should return 'YYYY''", function () {
    // act
    let result = main.secondLineOfMinutes(4);
    // assert
    expect(result).toBe("YYYY");
  });

  it("with 5 => should return '----''", function () {
    // act
    let result = main.secondLineOfMinutes(5);
    // assert
    expect(result).toBe("----");
  });

  it("with 6 => should return 'Y---''", function () {
    // act
    let result = main.secondLineOfMinutes(6);
    // assert
    expect(result).toBe("Y---");
  });

  it("with 7 => should return 'YY--''", function () {
    // act
    let result = main.secondLineOfMinutes(7);
    // assert
    expect(result).toBe("YY--");
  });

  it("with 57 => should return 'YY--''", function () {
    // act
    let result = main.secondLineOfMinutes(57);
    // assert
    expect(result).toBe("YY--");
  });

  it("with minutes => should return 'YYYY''", function () {
    // act
    let result = main.secondLineOfMinutes(minutes); // minutes = 39
    // assert
    expect(result).toBe("YYYY");
  });
});

// SECOND LINE OF HOURS
describe("testing the second line of minutes", function () {
  // arrange
  let main = new Main();

  it("with 0 => should return '----''", function () {
    // act
    let result = main.secondLineOfHours(0);
    // assert
    expect(result).toBe("----");
  });

  it("with 1 => should return 'R---''", function () {
    let result = main.secondLineOfHours(1);

    expect(result).toBe("R---");
  });

  it("with 2 => should return 'RR--''", function () {
    let result = main.secondLineOfHours(2);

    expect(result).toBe("RR--");
  });

  it("with 3 => should return 'RRR-''", function () {
    let result = main.secondLineOfHours(3);

    expect(result).toBe("RRR-");
  });

  it("with 4 => should return 'RRRR''", function () {
    let result = main.secondLineOfHours(4);

    expect(result).toBe("RRRR");
  });

  it("with 5 => should return '----''", function () {
    let result = main.secondLineOfHours(5);

    expect(result).toBe("----");
  });

  it("with 6 => should return 'R---''", function () {
    let result = main.secondLineOfHours(6);

    expect(result).toBe("R---");
  });

  it("with 7 => should return 'RR--''", function () {
    let result = main.secondLineOfHours(7);

    expect(result).toBe("RR--");
  });

  it("with 8 => should return 'RR--''", function () {
    let result = main.secondLineOfHours(8);

    expect(result).toBe("RRR-");
  });

  it("with 23 => should return 'RRR-''", function () {
    let result = main.secondLineOfHours(23);

    expect(result).toBe("RRR-");
  });

  it("with hours => should return 'R---''", function () {
    let result = main.secondLineOfHours(hours); // hours = 16

    expect(result).toBe("R---");
  });
});

// FIRST LINE OF HOURS
describe("testing the first line of hours", function () {
    // arrange
    let main = new Main();

    it("should return '---'", function () {
        // act
        let result = main.firstLineOfHours(0);

        expect(main.firstLineOfHours(0)).toBe('----');
    });
    
});