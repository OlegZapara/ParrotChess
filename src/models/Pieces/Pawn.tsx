import ChessPiece from './ChessPiece';
import { ReactComponent as WhitePawn } from '../../../assets/chess-pieces/white-pawn.svg';
import { ReactComponent as BlackPawn } from '../../../assets/chess-pieces/black-pawn.svg';

export default class Pawn extends ChessPiece {
  constructor(isWhite: boolean, position: string) {
    super(isWhite, position);
    if (isWhite) {
      this.icon = <WhitePawn />;
    } else {
      this.icon = <BlackPawn />;
    }
  }

  getMoves(): string[] {
    const listOfMoves: string[] = [];
    if (this.position.charAt(1) === '2' && this.isWhite) {
      listOfMoves.push(`${this.position.charAt(0)}4`);
    }
    if (this.position.charAt(1) === '7' && !this.isWhite) {
      listOfMoves.push(`${this.position.charAt(0)}5`);
    }
    listOfMoves.push(
      `${this.position.charAt(0)}${
        parseInt(this.position.charAt(1), 10) + (this.isWhite ? 1 : -1)
      }`,
    );
    return listOfMoves;
  }
}
