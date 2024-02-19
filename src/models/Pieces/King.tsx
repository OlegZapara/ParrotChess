import ChessPiece from './ChessPiece';
import { ReactComponent as WhiteKing } from '../../../assets/chess-pieces/white-king.svg';
import { ReactComponent as BlackKing } from '../../../assets/chess-pieces/black-king.svg';

export default class King extends ChessPiece {
  constructor(isWhite: boolean, position: string) {
    super(isWhite, position);
    if (isWhite) {
      this.icon = <WhiteKing />;
    } else {
      this.icon = <BlackKing />;
    }
  }

  getMoves(): string[] {
    if (this.isWhite) {
      return [];
    }
    return [];
  }
}
