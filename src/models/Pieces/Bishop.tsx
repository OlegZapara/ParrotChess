import ChessPiece from './ChessPiece';
import { ReactComponent as WhiteBishop } from '../../../assets/chess-pieces/white-bishop.svg';
import { ReactComponent as BlackBishop } from '../../../assets/chess-pieces/black-bishop.svg';

export default class Bishop extends ChessPiece {
  constructor(isWhite: boolean, position: string) {
    super(isWhite, position);
    if (isWhite) {
      this.icon = <WhiteBishop />;
    } else {
      this.icon = <BlackBishop />;
    }
  }

  getMoves(): string[] {
    if (this.isWhite) {
      return [];
    }
    return [];
  }
}
