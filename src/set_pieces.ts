import { Board, Piece } from "shogi2-types";
import {pieces} from "./piece_generate";

export default function set_pieces(board:Board){
  pieces.forEach((p)=>{
    const piece:Piece={
      position:{x:p.x,y:p.y},
      type:p.type,
      player:p.player,
      id:crypto.randomUUID()
    };
    board.squares=board.squares.map((square)=>{
      if (square.position.x===p.x && square.position.y===p.y){
        square.piece=piece;
      }
      return square;
    });
  });
}
