"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
var trafficLight_1 = require("./trafficLight");
var vehicle_1 = require("./vehicle");
var pedestrian_1 = require("./pedestrian");
var trafficLight = new trafficLight_1.TrafficLight();
var car = new vehicle_1.Vehicle("Car");
var bike = new vehicle_1.Vehicle("Bike");
var ambulance = new vehicle_1.Vehicle("Ambulance");
var pedestrian = new pedestrian_1.Pedestrian();
trafficLight.addObserver(car);
trafficLight.addObserver(bike);
trafficLight.addObserver(ambulance);
trafficLight.addObserver(pedestrian);
trafficLight.changeState("green");
trafficLight.changeState("yellow");
trafficLight.changeState("red");
