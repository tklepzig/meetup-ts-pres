type Rectangle = { height: number; width: number };
type Triangle = { height: number; base: number };

const calculateArea = (obj: Rectangle | Triangle) => {
  return obj.height * obj.width;
};

const rectangle: Rectangle = { height: 20, width: 30 };
console.log(calculateArea(rectangle));

const triangle: Triangle = { height: 20, base: 20 };
console.log(calculateArea(triangle));
