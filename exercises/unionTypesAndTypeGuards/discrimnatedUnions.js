function calculateArea(obj) {
  return obj.height * obj.width;
}

const rectangle = { height: 20, width: 30 };
console.log(calculateArea(rectangle));

const triangle = { height: 20, base: 20 };
console.log(calculateArea(triangle));
