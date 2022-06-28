"use strict";
exports.__esModule = true;
exports.Figure = exports.FigureNames = void 0;
var FigureNames;
(function (FigureNames) {
    FigureNames["FIGURE"] = "\u0424\u0438\u0433\u0443\u0440\u0430";
    FigureNames["KING"] = "\u041A\u043E\u0440\u043E\u043B\u044C";
    FigureNames["KNIGHT"] = "\u041A\u043E\u043D\u044C";
    FigureNames["PAWN"] = "\u041F\u0435\u0448\u043A\u0430";
    FigureNames["QUEEN"] = "\u0424\u0435\u0440\u0437\u044C";
    FigureNames["ROOK"] = "\u041B\u0430\u0434\u044C\u044F";
    FigureNames["BISHOP"] = "\u0421\u043B\u043E\u043D";
})(FigureNames = exports.FigureNames || (exports.FigureNames = {}));
var Figure = /** @class */ (function () {
    function Figure(color, cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
    }
    Figure.prototype.canMove = function (target) {
        var _a, _b;
        if (((_a = target.figure) === null || _a === void 0 ? void 0 : _a.color) === this.color)
            return false;
        if (((_b = target.figure) === null || _b === void 0 ? void 0 : _b.name) === FigureNames.KING)
            return false;
        return true;
    };
    Figure.prototype.moveFigure = function (target) { };
    return Figure;
}());
exports.Figure = Figure;
