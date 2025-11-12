import { BoardRequest, createBoard,  Event,  GameData, ModBase, Player, RequestExpansion, RequestUpdater, StartEvent } from "shogi2-types";
import {cloneDeep} from "lodash";
import set_pieces from "./set_pieces";

export default class Jojo extends ModBase{
  onStart(d: GameData, _before: GameData, _event: StartEvent, _sender: Player, _updater: RequestUpdater): { r: RequestExpansion[]; e: Event[]; } {
    const data=cloneDeep(d);
    const board=createBoard(15,15);
    set_pieces(board);
    data.board=board;
    const request=new BoardRequest("both",board,"exclude");
    return {r:[{request,data}],e:[]};
  }
};
