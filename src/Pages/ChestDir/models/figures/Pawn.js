"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Pawn = void 0;
var Figure_1 = require("./Figure");
var Colors_1 = require("../Colors");
var black_pawn_png_1 = require("../../assets/black-pawn.png");
var white_pawn_png_1 = require("../../assets/white-pawn.png");
var Pawn = /** @class */ (function (_super) {
    __extends(Pawn, _super);
    function Pawn(color, cell) {
        var _this = _super.call(this, color, cell) || this;
        _this.isFirstStep = true;
        _this.logo = color === Colors_1.Colors.BLACK ? black_pawn_png_1["default"] : white_pawn_png_1["default"];
        _this.name = Figure_1.FigureNames.PAWN;
        return _this;
    }
    Pawn.prototype.canMove = function (target) {
        var _a, _b;
        if (!_super.prototype.canMove.call(this, target))
            return false;
        var direction = ((_a = this.cell.figure) === null || _a === void 0 ? void 0 : _a.color) === Colors_1.Colors.BLACK ? 1 : -1;
        var firstStepDirection = ((_b = this.cell.figure) === null || _b === void 0 ? void 0 : _b.color) === Colors_1.Colors.BLACK ? 2 : -2;
        if ((target.y === this.cell.y + direction || this.isFirstStep
            && (target.y === this.cell.y + firstStepDirection))
            && target.x === this.cell.x
            && this.cell.board.getCell(target.x, target.y).isEmpty()) {
            return true;
        }
        if (target.y === this.cell.y + direction
            && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
            && this.cell.isEnemy(target)) {
            return true;
        }
        return false;
    };
    Pawn.prototype.moveFigure = function (target) {
        _super.prototype.moveFigure.call(this, target);
        this.isFirstStep = false;
    };
    return Pawn;
}(Figure_1.Figure));
exports.Pawn = Pawn;
