// main.ts
import { TrafficLight } from "./trafficLight";
import { Vehicle } from './vehicle';
import { Pedestrian } from './pedestrian';

const trafficLight = new TrafficLight();
const car = new Vehicle("Car");
const bike = new Vehicle("Bike");
const ambulance = new Vehicle("Ambulance");
const pedestrian = new Pedestrian();

trafficLight.addObserver(car);
trafficLight.addObserver(bike);
trafficLight.addObserver(ambulance);
trafficLight.addObserver(pedestrian);

trafficLight.changeState("green");
trafficLight.changeState("yellow");
trafficLight.changeState("red");
