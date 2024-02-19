import ChessPiece from './ChessPiece';
import { ReactComponent as WhiteKnight } from '../../../assets/chess-pieces/white-knight.svg';
import { ReactComponent as BlackKnight } from '../../../assets/chess-pieces/black-knight.svg';

export default class Knight extends ChessPiece {
  constructor(isWhite: boolean, position: string) {
    super(isWhite, position);
    if (isWhite) {
      this.icon = <WhiteKnight />;
    } else {
      this.icon = <BlackKnight />;
    }
  }

  getMoves(): string[] {
    if (this.isWhite) {
      return [];
    }
    return [];
  }
}
