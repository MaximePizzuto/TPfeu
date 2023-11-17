"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(name) {
        this.name = name;
    }
    Vehicle.prototype.update = function (state) {
        console.log("".concat(this.name, " received signal: ").concat(state));
        // Logique interne du véhicule en fonction du signal
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
