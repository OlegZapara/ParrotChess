import { useDispatch, useSelector } from 'react-redux';
import './Board.css';
import { useEffect, useState } from 'react';
import { initStartPosition, showHints, movePiece } from '../slices/BoardSlice';
import { RootState } from '../main/store';
import ChessBoard from '../models/Board/ChessBoard';
import ChessPiece from '../models/Pieces/ChessPiece';
import Cell from '../models/Board/Cell';

export default function Board() {
  const dispatch = useDispatch();
  const board: ChessBoard = useSelector(
    (state: RootState) => state.board.board,
  );
  const [activePiece, setActivePiece] = useState<ChessPiece | null>(null);
  dispatch(showHints(activePiece));

  useEffect(() => {
    dispatch(initStartPosition());
  }, [dispatch]);

  const cellClick = (cell: Cell): void => {
    if (activePiece !== null) {
      if (activePiece.getMoves().some((x) => x === cell.position)) {
        dispatch(movePiece({ piece: activePiece, cell }));
        setActivePiece(null);
        return;
      }
    }
    setActivePiece(cell.piece);
  };
  return (
    <div className="board">
      {board.cells.map((row) =>
        row.map((cell) => (
          <div
            className={`cell cell-${cell.isWhite ? 'white' : 'black'}`}
            key={cell.position}
            onClick={() => cellClick(cell)}
            role="presentation"
          >
            {cell.x === 0 && (
              <div className="left-numeration-hint">{cell.position[1]}</div>
            )}
            {cell.y === 0 && (
              <div className="bottom-numeration-hint">{cell.position[0]}</div>
            )}
            {cell.hint && <div className="hint" />}
            {cell.piece && (
              <div tabIndex={cell.x * 10 + cell.y} className="chess-piece-icon">
                {cell.piece.getIcon()}
              </div>
            )}
          </div>
        )),
      )}
    </div>
  );
}
