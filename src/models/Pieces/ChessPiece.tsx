export default abstract class ChessPiece {
  protected isWhite: boolean;

  protected icon: any;

  protected position: string;

  constructor(isWhite: boolean, position: string) {
    this.isWhite = isWhite;
    this.position = position;
  }

  getIcon(): any {
    return this.icon;
  }

  getPosition(): string {
    return this.position;
  }

  move(newPosition: string) {
    this.position = newPosition;
  }

  abstract getMoves(): string[];
}
