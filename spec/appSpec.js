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
            let result = main.getFirstLineOfMinutes(0);
            // assert
            expect(result).toBe("-----------");
        });

        it("should return the first line of minutes", function() {
            let result = main.getFirstLineOfMinutes(5);

            expect(result).toBe("Y----------");
        });

        it("should return the first line of minutes", function() {
            let result = main.getFirstLineOfMinutes(10);

            expect(result).toBe("YY---------");
        });

        it("should return the first line of minutes", function() {
            let result = main.getFirstLineOfMinutes(15);

            expect(result).toBe("YYY--------");
        });

        it("should return the first line of minutes", function() {
            let result = main.getFirstLineOfMinutes(20);

            expect(result).toBe("YYYY-------");
        });

        it("should return the first line of minutes", function() {
            let result = main.getFirstLineOfMinutes(5 * 11);

            expect(result).toBe("YYYYYYYYYYY");
        });

        it("should return the first line of minutes", function() {
            let result = main.getFirstLineOfMinutes(minutes); 

            expect(result).toBe("YYYYYYY----");
        });

    });
    
