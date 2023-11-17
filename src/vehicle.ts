// vehicle.ts
import { Observer } from './trafficLight';

export class Vehicle implements Observer {
  constructor(private name: string) {}

  update(state: string): void {
    console.log(`${this.name} received signal: ${state}`);
    // Logique interne du véhicule en fonction du signal
  }
}
