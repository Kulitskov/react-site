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
exports.Knight = void 0;
var Figure_1 = require("./Figure");
var Colors_1 = require("../Colors");
var black_knight_png_1 = require("../../assets/black-knight.png");
var white_knight_png_1 = require("../../assets/white-knight.png");
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight(color, cell) {
        var _this = _super.call(this, color, cell) || this;
        _this.logo = color === Colors_1.Colors.BLACK ? black_knight_png_1["default"] : white_knight_png_1["default"];
        _this.name = Figure_1.FigureNames.KNIGHT;
        return _this;
    }
    Knight.prototype.canMove = function (target) {
        if (!_super.prototype.canMove.call(this, target))
            return false;
        var dx = Math.abs(this.cell.x - target.x);
        var dy = Math.abs(this.cell.y - target.y);
        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
    };
    return Knight;
}(Figure_1.Figure));
exports.Knight = Knight;
