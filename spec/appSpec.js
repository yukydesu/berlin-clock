import { Main } from '../src/app.js';

const timestamp = 1672501199;

const date = new Date(timestamp * 1000);
const hours = date.getHours();
const minutes = date.getMinutes();  
const seconds = date.getSeconds(); 

describe("testing the second line of minutes", function() {
            // arrange
            let main = new Main();
    
            it("with 0 => should return '----''", function() {
                // act
                let result = main.secondLineOfMinutes(0);
                // assert
                expect(result).toBe("----");
            });

            it("with 1 => should return 'Y---''", function() {
                // act
                let result = main.secondLineOfMinutes(1);
                // assert
                expect(result).toBe("Y---");
            });

            it("with 2 => should return 'YY--''", function() {
                // act
                let result = main.secondLineOfMinutes(2);
                // assert
                expect(result).toBe("YY--");
            });

            it("with 3 => should return 'YYY-''", function() {
                // act
                let result = main.secondLineOfMinutes(3);
                // assert
                expect(result).toBe("YYY-");
            });

            



});
    
