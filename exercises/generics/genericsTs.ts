type ThingWithLegs = {
  legs: number;
};

type Animal = {
  tailSize: number;
} & ThingWithLegs;

type Human = {
  selfAwareness: boolean;
} & ThingWithLegs;

type Mushroom = {
  toxic: boolean;
};

const getLegs = <T extends ThingWithLegs>(obj): number => {
  return (obj as T).legs;
};

const turtle: Animal = { legs: 4, tailSize: 30 };
const hans: Human = { legs: 2, selfAwareness: true };
const fungus: Mushroom = { toxic: true };

console.log(getLegs<Animal>(turtle));
console.log(getLegs<Human>(hans));
console.log(getLegs<Mushroom>(fungus));
