import ChessPiece from '../Pieces/ChessPiece';

export default class Cell {
  public x: number;

  public y: number;

  public position: string;

  public hint: boolean = false;

  public isWhite: boolean;

  public piece: ChessPiece | null = null;

  public texture: any;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.position = String.fromCharCode(x + 97) + (y + 1).toString();
    this.isWhite = (x + y) % 2 === 1;
  }
}
