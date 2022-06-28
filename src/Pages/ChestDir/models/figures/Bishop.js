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
exports.Bishop = void 0;
var Figure_1 = require("./Figure");
var Colors_1 = require("../Colors");
var black_bishop_png_1 = require("../../assets/black-bishop.png");
var white_bishop_png_1 = require("../../assets/white-bishop.png");
var Bishop = /** @class */ (function (_super) {
    __extends(Bishop, _super);
    function Bishop(color, cell) {
        var _this = _super.call(this, color, cell) || this;
        _this.logo = color === Colors_1.Colors.BLACK ? black_bishop_png_1["default"] : white_bishop_png_1["default"];
        _this.name = Figure_1.FigureNames.BISHOP;
        return _this;
    }
    Bishop.prototype.canMove = function (target) {
        if (!_super.prototype.canMove.call(this, target))
            return false;
        if (this.cell.isEmptyDiagonal(target))
            return true;
        return false;
    };
    return Bishop;
}(Figure_1.Figure));
exports.Bishop = Bishop;
