describe("CalcService", function(){

    beforeEach(module("calcApp"));

    var service;

    beforeEach(inject(function(CalcService){
       service = CalcService;
    }));

    describe("Add:", function(){
        it("Adding 2 + 2 should equal 4", function(){
            expect(service.add(2, 2)).toEqual(4);
        });
    });

    describe("Clear:", function(){
        it("Should return 0", function(){
            expect(service.clear()).toEqual(0);
        });
    });

    describe("Divide:", function(){
        it("Dividing 4 by 2 should equal 2", function(){
            expect(service.divide(4, 2)).toEqual(2);
        });
    });

    describe("Multiply:", function(){
        it("Multiplying 2 by 2 should equal 4", function(){
            expect(service.multiply(2, 2)).toEqual(4);
        });
    });

    describe("Percent:", function(){
        it("Turning 80 into a percent should equal .8", function(){
            expect(service.percent(80)).toEqual(.8);
        });
    });

    describe("Sign:", function(){
        it("Chaning the sign of 2 should equal negative 2", function(){
            expect(service.sign(2)).toEqual(-2);
        });
    });

    describe("Subtract:", function(){
        it("Subtracting 2 from 4 should equal 2", function(){
            expect(service.subtract(4, 2)).toEqual(2);
        });
    });

});
