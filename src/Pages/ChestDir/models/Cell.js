"use strict";
exports.__esModule = true;
exports.Cell = void 0;
var Colors_1 = require("./Colors");
var Cell = /** @class */ (function () {
    function Cell(board, x, y, color, figure) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.board = board;
        this.available = false;
        this.id = Math.random();
    }
    Cell.prototype.isEmpty = function () {
        return this.figure === null;
    };
    Cell.prototype.isEnemy = function (target) {
        var _a;
        if (target.figure) {
            return ((_a = this.figure) === null || _a === void 0 ? void 0 : _a.color) !== target.figure.color;
        }
        return false;
    };
    Cell.prototype.isEmptyVertical = function (target) {
        if (this.x !== target.x) {
            return false;
        }
        var min = Math.min(this.y, target.y);
        var max = Math.max(this.y, target.y);
        for (var y = min + 1; y < max; y++) {
            if (!this.board.getCell(this.x, y).isEmpty()) {
                return false;
            }
        }
        return true;
    };
    Cell.prototype.isEmptyHorizontal = function (target) {
        if (this.y !== target.y) {
            return false;
        }
        var min = Math.min(this.x, target.x);
        var max = Math.max(this.x, target.x);
        for (var x = min + 1; x < max; x++) {
            if (!this.board.getCell(x, this.y).isEmpty()) {
                return false;
            }
        }
        return true;
    };
    Cell.prototype.isEmptyDiagonal = function (target) {
        var absX = Math.abs(target.x - this.x);
        var absY = Math.abs(target.y - this.y);
        if (absY !== absX)
            return false;
        var dy = this.y < target.y ? 1 : -1;
        var dx = this.x < target.x ? 1 : -1;
        for (var i = 1; i < absY; i++) {
            if (!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmpty())
                return false;
        }
        return true;
    };
    Cell.prototype.setFigure = function (figure) {
        this.figure = figure;
        this.figure.cell = this;
    };
    Cell.prototype.addLostFigure = function (figure) {
        figure.color === Colors_1.Colors.BLACK
            ? this.board.lostBlackFigures.push(figure)
            : this.board.lostWhiteFigures.push(figure);
    };
    Cell.prototype.moveFigure = function (target) {
        var _a;
        if (this.figure && ((_a = this.figure) === null || _a === void 0 ? void 0 : _a.canMove(target))) {
            this.figure.moveFigure(target);
            if (target.figure) {
                console.log(target.figure);
                this.addLostFigure(target.figure);
            }
            target.setFigure(this.figure);
            this.figure = null;
        }
    };
    return Cell;
}());
exports.Cell = Cell;
