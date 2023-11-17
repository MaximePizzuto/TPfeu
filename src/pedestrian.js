"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedestrian = void 0;
var Pedestrian = /** @class */ (function () {
    function Pedestrian() {
    }
    Pedestrian.prototype.update = function (state) {
        console.log("Pedestrian received signal: ".concat(state));
        // Logique interne du piéton en fonction du signal
    };
    return Pedestrian;
}());
exports.Pedestrian = Pedestrian;
