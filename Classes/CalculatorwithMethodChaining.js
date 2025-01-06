class Calculator {
    constructor(initialValue) {
      this.result = initialValue;
    }
  
    add(value) {
      this.result += value;
      return this;
    }
  
    subtract(value) {
      this.result -= value;
      return this;
    }
  
    multiply(value) {
      this.result *= value;
      return this;
    }
  
    divide(value) {
      if (value === 0) {
        throw "Division by zero is not allowed";
      }
      this.result /= value;
      return this;
    }
  
    power(value) {
      this.result = Math.pow(this.result, value);
      return this;
    }
  
    getResult() {
      return this.result;
    }
  }
  
  // Example
  const calc1 = new Calculator(10);
  console.log(calc1.add(5).subtract(7).getResult());
  
  const calc2 = new Calculator(2);
  console.log(calc2.multiply(5).power(2).getResult());
  
  try {
    const calc3 = new Calculator(20);
    console.log(calc3.divide(0).getResult());
  } catch (error) {
    console.log(error);
  }
  