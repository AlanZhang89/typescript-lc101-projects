import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
  // properties and methods
  name: string;
  totalCapacityKg: number;
  cargoItems: Cargo[] = [];
  astronauts: Astronaut[] = [];
  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }
  sumMass(items: Payload[]): number {
    let sumMass: number = 0;
    for (let i: number = 0; i < items.length; i++) {
      sumMass += items[i].massKg;
    }
    return sumMass;
  }
  currentMassKg(): number {
    let sumAstronaut: number = this.sumMass(this.astronauts);
    let sumItems: number = this.sumMass(this.cargoItems);
    let sum: number = sumAstronaut + sumItems;
    return sum;
  }
  canAdd(item: Payload): boolean {
    if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
      return true;
    }
    return false;
  }
  addCargo(cargo: Cargo): boolean {
    if (this.canAdd(cargo)) {
      this.cargoItems.push(cargo);
      return true;
    }
    return false;
  }
  addAstronaut(astronaut: Astronaut): boolean {
    if (this.canAdd(astronaut)) {
      this.astronauts.push(astronaut);
    }
    return false;
  }
}
