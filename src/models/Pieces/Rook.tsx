import ChessPiece from './ChessPiece';
import { ReactComponent as WhiteRook } from '../../../assets/chess-pieces/white-rook.svg';
import { ReactComponent as BlackRook } from '../../../assets/chess-pieces/black-rook.svg';

export default class Rook extends ChessPiece {
  constructor(isWhite: boolean, position: string) {
    super(isWhite, position);
    if (isWhite) {
      this.icon = <WhiteRook />;
    } else {
      this.icon = <BlackRook />;
    }
  }

  getMoves(): string[] {
    if (this.isWhite) {
      return [];
    }
    return [];
  }
}
