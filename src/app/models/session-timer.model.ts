import {DbTypeEnum} from "./dbType/db-type.enum";

export class SessionTimer {
  _id?: string;
  _rev?: string;
  sessionId?: string;
  timerId?: string;
  type: DbTypeEnum = DbTypeEnum.SESSIONTIMER;
}
