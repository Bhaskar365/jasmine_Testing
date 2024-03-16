
describe('Calculator.js', function() {
    // to disable xit or xdescribe
    it('should add number to the total', function() {
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

    // toBe matcher (===)
    it('should initialize the total=0', function() {
        const calculator = new Calculator();

        // let person1 = { name: 'laos' };
        // let person2 = { name: 'laos' };
        // expect(person1).toBe(person2)
        // expect(person1).toEqual(person2)

        expect(calculator.total).toBe(0);
    })
}); 