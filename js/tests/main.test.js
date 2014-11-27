describe("foo", function(){

    it("foo should return foo", function(){
        expect(foo()).toEqual("foo");
    });
});


describe("FizzBuzz", function(){
    it("FizzBuzz with 1", function(){
        expect(FizzOrBuzz(1)).toEqual(1);
    });
    it("FizzBuzz with 3", function(){
        expect(FizzOrBuzz(3)).toEqual("Fizz");
    });
    it("FizzBuzz with 5", function(){
        expect(FizzOrBuzz(5)).toEqual("Buzz");
    });
    it("FizzBuzz with 15", function(){
        expect(FizzOrBuzz(15)).toEqual("FizzBuzz");
    });
    it("FizzBuzz with 14", function(){
        expect(FizzOrBuzz(14)).toEqual(14);
    });
});