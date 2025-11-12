import { BoardRequest, createBoard, Event, GameData, ModBase, Player, Request, RequestUpdater, StartEvent } from "shogi2-types";

export default class Jojo extends ModBase{
  onStart(data: GameData, _event: StartEvent, _sender: Player, _updater: RequestUpdater): { r: Request[]; e: Event[]; } {
    const board=createBoard(15,15);
    data.board=board;
    const request=new BoardRequest("both",board,"exclude");
    return {r:[request],e:[]};
  }
};
