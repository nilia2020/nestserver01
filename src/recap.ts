const myName = 'Nicolas';

const myAge = 12;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(3, myAge);

const concat = (a: string, b: string) => {
  return a + b;
};
concat(myName, ' Cage');

class Persona {
  constructor(private age: number, private name: string) {
    this.age = age;
    this.name = name;
  }
  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const Jorge = new Persona(51, 'Jorge');

Jorge.getSummary();
