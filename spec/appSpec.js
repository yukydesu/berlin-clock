import { Main } from '../src/app.js';

const timestamp = 1672501199;

const date = new Date(timestamp * 1000);
const hours = date.getHours();
const minutes = date.getMinutes();  
const seconds = date.getSeconds();

console.log("hours: ", hours);

// SECOND LINE OF HOURS
describe("testing the second line of minutes", function() {
            // arrange
            let main = new Main();
    
            it("with 0 => should return '----''", function() {
                // act
                let result = main.secondLineOfMinutes(0);
                // assert
                expect(result).toBe("----");
            });

            it("with 1 => should return 'R---''", function() {
                // act
                let result = main.secondLineOfMinutes(1);
                // assert
                expect(result).toBe("R---");
            });

            it("with 2 => should return 'RR--''", function() {
                // act
                let result = main.secondLineOfMinutes(2);
                // assert
                expect(result).toBe("RR--");
            });

            it("with 3 => should return 'RRR-''", function() {
                // act
                let result = main.secondLineOfMinutes(3);
                // assert
                expect(result).toBe("RRR-");
            });

            it("with 4 => should return 'RRRR''", function() {
                // act
                let result = main.secondLineOfMinutes(4);
                // assert
                expect(result).toBe("RRRR");
            });

            it("with 5 => should return '----''", function() {
                // act
                let result = main.secondLineOfMinutes(5);
                // assert
                expect(result).toBe("----");
            });

            it("with 6 => should return 'R---''", function() {
                // act
                let result = main.secondLineOfMinutes(6);
                // assert
                expect(result).toBe("R---");
            });

            it("with 7 => should return 'RR--''", function() {
                // act
                let result = main.secondLineOfMinutes(7);
                // assert
                expect(result).toBe("RR--");
            });

            it("with 57 => should return 'RR--''", function() {
                // act
                let result = main.secondLineOfMinutes(8);
                // assert
                expect(result).toBe("RRR-");
            });

            it("with minutes => should return 'R---''", function() {
                // act
                let result = main.secondLineOfMinutes(hours); // hours = 16
                // assert
                expect(result).toBe("R---");
            });

});
    
