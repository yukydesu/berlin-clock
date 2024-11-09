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
            expect(result).toBe("-----------");
        });

        it("should return the first line of minutes", function() {
            let result = main.firstLineOfMinutes(5);

            expect(result).toBe("Y----------");
        });

        it("should return the first line of minutes", function() {
            let result = main.firstLineOfMinutes(10);

            expect(result).toBe("YY---------");
        });

        it("should return the first line of minutes", function() {
            let result = main.firstLineOfMinutes(15);

            expect(result).toBe("YYR--------");
        });

        it("should return the first line of minutes", function() {
            let result = main.firstLineOfMinutes(20);

            expect(result).toBe("YYRY-------");
        });

        it("should return the first line of minutes", function() {
            let result = main.firstLineOfMinutes(5 * 11);

            expect(result).toBe("YYRYYRYYRYY");
        });

        it("should return the first line of minutes", function() {
            let result = main.firstLineOfMinutes(minutes); 

            expect(result).toBe("YYRYYRY----");
        });

    });


describe("testing the second line of minutes", function() {
            // arrange
            let main = new Main();
    
            it("should return the second line of minutes", function() {
                // act
                let result = main.secondLineOfMinutes(0);
                // assert
                expect(result).toBe("----");
            });
    
            it("should return the second line of minutes", function() {
                let result = main.secondLineOfMinutes();
    
                expect(result).toBe("Y---");
            });
    
            it("should return the second line of minutes", function() {
                let result = main.secondLineOfMinutes();
    
                expect(result).toBe("YY--");
            });
    
            it("should return the second line of minutes", function() {
                let result = main.secondLineOfMinutes();
    
                expect(result).toBe("YYY-");
            });
    
            it("should return the second line of minutes", function() {
                let result = main.secondLineOfMinutes();
    
                expect(result).toBe("YYYY");
            });
    
            it("should return the second line of minutes", function() {
                let result = main.secondLineOfMinutes(minutes);
    
                expect(result).toBe("YY--");
            });

});
    
