// trafficLight.ts
export interface Observer {
    update(state: string): void;
  }
  
  export class TrafficLight {
    private state: string = "red";
    private observers: Observer[] = [];
  
    addObserver(observer: Observer): void {
      this.observers.push(observer);
    }
  
    changeState(newState: string): void {
      this.state = newState;
      this.notifyObservers();
    }
  
    private notifyObservers(): void {
      for (const observer of this.observers) {
        observer.update(this.state);
      }
    }
  }
  