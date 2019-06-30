const spyOn = <T, K extends keyof T>(object: T, key: K) => {
  // ...
};

const myObject = { a: () => {}, b: () => {}, c: () => {} };
spyOn(myObject, "a");
