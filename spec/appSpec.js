import { Main } from '../src/app.js';

const timestamp = 1672501199; // 16:39:59
//const timestamp = 1731192959; // 23:55:59
//const timestamp = 1731193199; // 23:59:59
//const timestamp = 1731106800; // 00:00:00


const date = new Date(timestamp * 1000);
const hours = date.getHours();
const minutes = date.getMinutes();  
const seconds = date.getSeconds();

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
                let result = main.secondLineOfMinutes(1);

                expect(result).toBe("R---");
            });

            it("with 2 => should return 'RR--''", function() {
                let result = main.secondLineOfMinutes(2);

                expect(result).toBe("RR--");
            });

            it("with 3 => should return 'RRR-''", function() {
                let result = main.secondLineOfMinutes(3);

                expect(result).toBe("RRR-");
            });

            it("with 4 => should return 'RRRR''", function() {
                let result = main.secondLineOfMinutes(4);

                expect(result).toBe("RRRR");
            });

            it("with 5 => should return '----''", function() {
                let result = main.secondLineOfMinutes(5);

                expect(result).toBe("----");
            });

            it("with 6 => should return 'R---''", function() {
                let result = main.secondLineOfMinutes(6);

                expect(result).toBe("R---");
            });

            it("with 7 => should return 'RR--''", function() {
                let result = main.secondLineOfMinutes(7);

                expect(result).toBe("RR--");
            });

            it("with 8 => should return 'RR--''", function() {
                let result = main.secondLineOfMinutes(8);

                expect(result).toBe("RRR-");
            });

            
            it("with 23 => should return 'RRR-''", function() {
                let result = main.secondLineOfMinutes(23);

                expect(result).toBe("RRR-");
            });


            it("with hours => should return 'R---''", function() {
                let result = main.secondLineOfMinutes(hours); // hours = 16

                expect(result).toBe("R---");
            });

});
    
