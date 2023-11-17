"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrafficLight = void 0;
var TrafficLight = /** @class */ (function () {
    function TrafficLight() {
        this.state = "red";
        this.observers = [];
    }
    TrafficLight.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    TrafficLight.prototype.changeState = function (newState) {
        this.state = newState;
        this.notifyObservers();
    };
    TrafficLight.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.state);
        }
    };
    return TrafficLight;
}());
exports.TrafficLight = TrafficLight;
