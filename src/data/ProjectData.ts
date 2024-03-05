export default class ProjectData {
  id: string;
  name: string;
  targetUrl: string;
  iconUrl: string; // used as thumnail
  isWide: boolean; // thumbnail will take 2 cols in the grid view
  isHigh: boolean; // thumbnail will take 2 rows in the grid view
  accentColor: string; // color of title bar

  constructor(
    id: string,
    name: string,
    iconUrl: string,
    targetUrl: string,
    accentColor = "#000000",
    isHigh = false,
    isWide = false
  ) {
    this.id = id;
    this.name = name;
    this.targetUrl = targetUrl;
    this.iconUrl = iconUrl;
    this.isHigh = isHigh;
    this.isWide = isWide;
    this.accentColor = accentColor;
  }
}
