import {DbTypeEnum} from "./dbType/db-type.enum";

export class Timer {
  _id?: string;
  _rev?: string;
  time?: number;
  name?: string;
  type: DbTypeEnum = DbTypeEnum.TIMER;
}
