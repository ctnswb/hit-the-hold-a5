export class Hold {
  public name: string;
  public location: object;
  public show: boolean;

  constructor(name: string, location: object, show: boolean) {
    this.name = name;
    this.location = location;
    this.show = show;
  }
}