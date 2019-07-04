function getLegs(obj) {
  return obj.legs;
}

const turtle = { legs: 4, tailSize: 30 };
const hans = { legs: 2, selfAwareness: true };
const fungus = { toxic: true };

console.log(getLegs(turtle));
console.log(getLegs(hans));
console.log(getLegs(fungus));
