function logMethod(
  _: object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.dir(`Call method '${propertyKey}'`);
  return descriptor.value;
}

class Calculator {
  @logMethod
  addNumbers(a: number, b: number): number {
    return a + b;
  }
}

const calculator = new Calculator();

console.log(calculator.addNumbers(1, 2));
