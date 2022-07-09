export class ParametresItem {
  public name?: string;
  public url?: string;
  public isSwitch?: boolean;

  constructor(name?: string, url?: string, isSwitch?: boolean) {
    this.name = name;
    this.url = url;
    this.isSwitch = isSwitch;
  }
}
