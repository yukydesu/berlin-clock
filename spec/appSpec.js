import { Main } from '../src/app.js';

const timestamp = 1672501199;

const date = new Date(timestamp * 1000);
const hours = date.getHours();
const minutes = date.getMinutes();  
const seconds = date.getSeconds(); 

describe("testing the first line of minutes", function() { 

        // arrange
        let main = new Main();

        it("should return the first line of minutes", function() {
            // act
            let result = main.firstLineOfMinutes(0);
            // assert
            expect(result).toBe("-----------"); // 0 / 5 = 0
        });


        it("should return the first line of minutes", function() {
            let result = main.firstLineOfMinutes(1);

            expect(result).toBe("-----------"); // 1 / 5 = 0.2
        });

        it("should return the first line of minutes", function() {
            let result = main.firstLineOfMinutes(4);

            expect(result).toBe("-----------"); // 4 / 5 = 0.8
        });


        it("should return the first line of minutes", function() {
            let result = main.firstLineOfMinutes(5); // 5 / 5 = 1

            expect(result).toBe("Y----------");
        });

        it("should return the first line of minutes", function() { // 10 / 5 = 2
            let result = main.firstLineOfMinutes(10);

            expect(result).toBe("YY---------");
        });

        it("should return the first line of minutes", function() { // 15 / 5 = 3
            let result = main.firstLineOfMinutes(15);

            expect(result).toBe("YYR--------");
        });

        it("should return the first line of minutes", function() { // 20 / 5 = 4
            let result = main.firstLineOfMinutes(20);

            expect(result).toBe("YYRY-------");
        });

        it("should return the first line of minutes", function() {
            let result = main.firstLineOfMinutes(5 * 11); // 55 / 5 = 11

            expect(result).toBe("YYRYYRYYRYY");
        });

        it("should return the first line of minutes", function() {
            let result = main.firstLineOfMinutes(minutes); // minutes = 39 => 39 / 5 = 7.8

            expect(result).toBe("YYRYYRY----");
        });

    });
    
