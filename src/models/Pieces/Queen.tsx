import ChessPiece from './ChessPiece';
import { ReactComponent as WhiteQueen } from '../../../assets/chess-pieces/white-queen.svg';
import { ReactComponent as BlackQueen } from '../../../assets/chess-pieces/black-queen.svg';

export default class Queen extends ChessPiece {
  constructor(isWhite: boolean, position: string) {
    super(isWhite, position);
    if (isWhite) {
      this.icon = <WhiteQueen />;
    } else {
      this.icon = <BlackQueen />;
    }
  }

  getMoves(): string[] {
    if (this.isWhite) {
      return [];
    }
    return [];
  }
}
