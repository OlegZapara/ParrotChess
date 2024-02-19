import { createSlice } from '@reduxjs/toolkit';
import Board from '../models/Board/ChessBoard';
import Rook from '../models/Pieces/Rook';
import Pawn from '../models/Pieces/Pawn';
import Knight from '../models/Pieces/Knight';
import Bishop from '../models/Pieces/Bishop';
import Queen from '../models/Pieces/Queen';
import King from '../models/Pieces/King';
import ChessPiece from '../models/Pieces/ChessPiece';
import Cell from '../models/Board/Cell';

interface BoardState {
  board: Board;
}

const initialState = { board: new Board() } as BoardState;

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    initStartPosition: (state) => {
      const initialBoard = new Board();
      initialBoard.placePiece(new Rook(true, 'a1'));
      initialBoard.placePiece(new Knight(true, 'b1'));
      initialBoard.placePiece(new Bishop(true, 'c1'));
      initialBoard.placePiece(new Queen(true, 'd1'));
      initialBoard.placePiece(new King(true, 'e1'));
      initialBoard.placePiece(new Bishop(true, 'f1'));
      initialBoard.placePiece(new Knight(true, 'g1'));
      initialBoard.placePiece(new Rook(true, 'h1'));
      initialBoard.placePiece(new Rook(false, 'a8'));
      initialBoard.placePiece(new Knight(false, 'b8'));
      initialBoard.placePiece(new Bishop(false, 'c8'));
      initialBoard.placePiece(new Queen(false, 'd8'));
      initialBoard.placePiece(new King(false, 'e8'));
      initialBoard.placePiece(new Bishop(false, 'f8'));
      initialBoard.placePiece(new Knight(false, 'g8'));
      initialBoard.placePiece(new Rook(false, 'h8'));
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].forEach((x) => {
        initialBoard.placePiece(new Pawn(true, `${x}2`));
        initialBoard.placePiece(new Pawn(false, `${x}7`));
      });
      state.board = initialBoard;
    },
    showHints: (state, action: { payload: ChessPiece | null }) => {
      state.board.cells.forEach((row) => {
        row.forEach((cell) => {
          cell.hint = false;
        });
      });
      if (action.payload === null) return;
      action.payload?.getMoves().forEach((move) => {
        state.board.cellAtPosition(move).hint = true;
      });
    },
    movePiece: (
      state,
      action: { payload: { piece: ChessPiece; cell: Cell } },
    ) => {
      state.board.cells.forEach((row) => {
        row.forEach((cell) => {
          if (cell.position === action.payload.piece.getPosition()) {
            cell.piece = null;
          }
        });
      });
      state.board.cells.forEach((row) => {
        row.forEach((cell) => {
          if (cell.position === action.payload.cell.position) {
            cell.piece = action.payload.piece;
            cell.piece.move(cell.position);
          }
        });
      });
    },
  },
});

export const { initStartPosition, showHints, movePiece } = boardSlice.actions;
export default boardSlice.reducer;
