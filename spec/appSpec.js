import { Main } from '../src/app.js';

const timestamp = 1672501190;

const date = new Date(timestamp * 1000);
const hours = date.getHours();
const minutes = date.getMinutes(); 
const seconds = date.getSeconds(); 

describe("A suite of test for the demo function of the main class", function() { 

        // arrange
        let main = new Main();

        it("should return the first line of minutes", function() {
            // act
            let result = main.firstLineOfMinutes(0);
            // assert
            expect(result).toBe("-----------");
        });

        it("should return the first line of minutes", function() {
            // act
            let result = main.firstLineOfMinutes(5);
            // assert
            expect(result).toBe("Y----------");
        });

        it("should return the first line of minutes", function() {
            // act
            let result = main.firstLineOfMinutes(10);
            // assert
            expect(result).toBe("YY---------");
        });

        it("should return the first line of minutes", function() {
            // act
            let result = main.firstLineOfMinutes(15);
            // assert
            expect(result).toBe("YYY--------");
        });

        it("should return the first line of minutes", function() {
            // act
            let result = main.firstLineOfMinutes(20);
            // assert
            expect(result).toBe("YYYY-------");
        });

        it("should return the first line of minutes", function() {
            // act
            let result = main.firstLineOfMinutes(5 * 11);
            // assert
            expect(result).toBe("YYYYYYYYYYY");
        });

        it("should return the first line of minutes", function() {
            // act
            let result = main.firstLineOfMinutes(minutes); 
            // assert
            expect(result).toBe("YYYYYYY----");
        });

    });
    
