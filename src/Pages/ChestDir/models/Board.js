"use strict";
exports.__esModule = true;
exports.Board = void 0;
var Cell_1 = require("./Cell");
var Colors_1 = require("./Colors");
var Pawn_1 = require("./figures/Pawn");
var King_1 = require("./figures/King");
var Queen_1 = require("./figures/Queen");
var Bishop_1 = require("./figures/Bishop");
var Knight_1 = require("./figures/Knight");
var Rook_1 = require("./figures/Rook");
var Board = /** @class */ (function () {
    function Board() {
        this.cells = [];
        this.lostBlackFigures = [];
        this.lostWhiteFigures = [];
    }
    Board.prototype.initCells = function () {
        for (var i = 0; i < 8; i++) {
            var row = [];
            for (var j = 0; j < 8; j++) {
                if ((i + j) % 2 !== 0) {
                    row.push(new Cell_1.Cell(this, j, i, Colors_1.Colors.BLACK, null)); // Черные ячейки
                }
                else {
                    row.push(new Cell_1.Cell(this, j, i, Colors_1.Colors.WHITE, null)); // белые
                }
            }
            this.cells.push(row);
        }
    };
    Board.prototype.getCopyBoard = function () {
        var newBoard = new Board();
        newBoard.cells = this.cells;
        newBoard.lostWhiteFigures = this.lostWhiteFigures;
        newBoard.lostBlackFigures = this.lostBlackFigures;
        return newBoard;
    };
    Board.prototype.highlightCells = function (selectedCell) {
        var _a;
        for (var i = 0; i < this.cells.length; i++) {
            var row = this.cells[i];
            for (var j = 0; j < row.length; j++) {
                var target = row[j];
                target.available = !!((_a = selectedCell === null || selectedCell === void 0 ? void 0 : selectedCell.figure) === null || _a === void 0 ? void 0 : _a.canMove(target));
            }
        }
    };
    Board.prototype.getCell = function (x, y) {
        return this.cells[y][x];
    };
    Board.prototype.addPawns = function () {
        for (var i = 0; i < 8; i++) {
            new Pawn_1.Pawn(Colors_1.Colors.BLACK, this.getCell(i, 1));
            new Pawn_1.Pawn(Colors_1.Colors.WHITE, this.getCell(i, 6));
        }
    };
    Board.prototype.addKings = function () {
        new King_1.King(Colors_1.Colors.BLACK, this.getCell(4, 0));
        new King_1.King(Colors_1.Colors.WHITE, this.getCell(4, 7));
    };
    Board.prototype.addQueens = function () {
        new Queen_1.Queen(Colors_1.Colors.BLACK, this.getCell(3, 0));
        new Queen_1.Queen(Colors_1.Colors.WHITE, this.getCell(3, 7));
    };
    Board.prototype.addBishops = function () {
        new Bishop_1.Bishop(Colors_1.Colors.BLACK, this.getCell(2, 0));
        new Bishop_1.Bishop(Colors_1.Colors.BLACK, this.getCell(5, 0));
        new Bishop_1.Bishop(Colors_1.Colors.WHITE, this.getCell(2, 7));
        new Bishop_1.Bishop(Colors_1.Colors.WHITE, this.getCell(5, 7));
    };
    Board.prototype.addKnights = function () {
        new Knight_1.Knight(Colors_1.Colors.BLACK, this.getCell(1, 0));
        new Knight_1.Knight(Colors_1.Colors.BLACK, this.getCell(6, 0));
        new Knight_1.Knight(Colors_1.Colors.WHITE, this.getCell(1, 7));
        new Knight_1.Knight(Colors_1.Colors.WHITE, this.getCell(6, 7));
    };
    Board.prototype.addRooks = function () {
        new Rook_1.Rook(Colors_1.Colors.BLACK, this.getCell(0, 0));
        new Rook_1.Rook(Colors_1.Colors.BLACK, this.getCell(7, 0));
        new Rook_1.Rook(Colors_1.Colors.WHITE, this.getCell(0, 7));
        new Rook_1.Rook(Colors_1.Colors.WHITE, this.getCell(7, 7));
    };
    // public addFisherFigures() {
    //
    // }
    Board.prototype.addFigures = function () {
        this.addPawns();
        this.addKnights();
        this.addKings();
        this.addBishops();
        this.addQueens();
        this.addRooks();
    };
    return Board;
}());
exports.Board = Board;
