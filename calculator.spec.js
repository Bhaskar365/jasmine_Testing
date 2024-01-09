
describe('Calculator.js', function() {
    // to disable xit or xdescribe
    xit('should add number to the total', function() {
        //expect(5+5).toBe(10)
        //expected to be 5
        const calculator = new Calculator();
        calculator.add(5)
        expect(calculator.total).toBe(5);
    });

    it('should subtract number from the total', function() {
        //expect(5-5).toBe(0)
        const calculator = new Calculator();
        calculator.total = 30;
        calculator.subtract(4);
        expect(calculator.total).toBe(26)
    });

    it('should multiply number with the total', function() {
        const calculator = new Calculator();
        calculator.total = 10;
        calculator.multiply(2);
        expect(calculator.total).toBe(20)
    });

    it('should divide number by the total', function() {
        const calculator = new Calculator();
        calculator.total = 20;
        calculator.divide(4);
        expect(calculator.total).toBe(5);
    });

}); 