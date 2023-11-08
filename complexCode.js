/* 
 * Filename: complexCode.js
 * Description: A complex and sophisticated JavaScript code example.
 */

// Constants
const PI = 3.14159;
const MAX_ITERATIONS = 1000;

// Helper functions
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Class definition
class Complex {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }
  
  add(complex) {
    return new Complex(this.real + complex.real, this.imaginary + complex.imaginary);
  }
  
  subtract(complex) {
    return new Complex(this.real - complex.real, this.imaginary - complex.imaginary);
  }
  
  multiply(complex) {
    const real = this.real * complex.real - this.imaginary * complex.imaginary;
    const imaginary = this.real * complex.imaginary + this.imaginary * complex.real;
    return new Complex(real, imaginary);
  }
  
  divide(complex) {
    const denominator = complex.real * complex.real + complex.imaginary * complex.imaginary;
    const real = (this.real * complex.real + this.imaginary * complex.imaginary) / denominator;
    const imaginary = (this.imaginary * complex.real - this.real * complex.imaginary) / denominator;
    return new Complex(real, imaginary);
  }
  
  magnitude() {
    return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
  }
  
  toString() {
    return `${this.real} + ${this.imaginary}i`;
  }
}

// Complex number calculations
const complex1 = new Complex(2, 5);
const complex2 = new Complex(3, -2);

const complexSum = complex1.add(complex2);
const complexDifference = complex1.subtract(complex2);
const complexProduct = complex1.multiply(complex2);
const complexQuotient = complex1.divide(complex2);

console.log("Complex Number Calculations:");
console.log("Sum: " + complexSum.toString());
console.log("Difference: " + complexDifference.toString());
console.log("Product: " + complexProduct.toString());
console.log("Quotient: " + complexQuotient.toString());

// Factorial calculation using recursion
const number = 6;
const fact = factorial(number);

console.log("\nFactorial Calculation:");
console.log(`${number}! = ${fact}`);

// Check prime numbers
console.log("\nPrime Numbers:");

for (let i = 2; i <= MAX_ITERATIONS; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

// Mathematical constant calculation
console.log("\nMathematical Constants:");

console.log("PI: " + PI);
console.log("Euler's Number (e): " + Math.exp(1));
console.log("Square Root of 2: " + Math.sqrt(2));
console.log("Natural Logarithm of 10: " + Math.log(10));