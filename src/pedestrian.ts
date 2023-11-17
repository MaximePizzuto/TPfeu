// pedestrian.ts
import { Observer } from './trafficLight';

export class Pedestrian implements Observer {
  update(state: string): void {
    console.log(`Pedestrian received signal: ${state}`);
    // Logique interne du piéton en fonction du signal
  }
}
