import ChessPiece from '../Pieces/ChessPiece';
import Cell from './Cell';

export default class ChessBoard {
  private height: number = 8;

  private width: number = 8;

  public cells: Cell[][] = [];

  constructor() {
    for (let i = this.height - 1; i >= 0; i -= 1) {
      const row: Cell[] = [];
      for (let j = 0; j < this.width; j += 1) {
        row.push(new Cell(j, i));
      }
      this.cells.push(row);
    }
  }

  public cellAtPosition(position: string): Cell {
    const x = position.charCodeAt(0) - 'a'.charCodeAt(0);
    const y = position.charCodeAt(1) - '1'.charCodeAt(0);
    return this.cells[this.height - y - 1][x];
  }

  public placePiece(piece: ChessPiece): void {
    const cell = this.cellAtPosition(piece.getPosition());
    cell.piece = piece;
  }
}
