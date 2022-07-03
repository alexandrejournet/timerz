import {Timer} from "./timer.model";
import {DbTypeEnum} from "./dbType/db-type.enum";

export class Session {
  _id?: string;
  _rev?: string;
  name?: string;
  totalTime?: number;
  timers?: Timer[];
  type: DbTypeEnum = DbTypeEnum.SESSION;
}
