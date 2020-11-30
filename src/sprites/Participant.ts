import ParticipantImage from '/src/assets/participant.png';
import {Sprite} from "./Sprite";
import {Coordinates} from "../types/Coordinates";
import {CircleSize} from "../types/CircleSize";

export class Participant extends Sprite {
  set font(font: string) {
    this._font = font;
    this.graphicsContext.font = font;
  }

  private speed = 0.09;
  dancingCircleCenter: Coordinates = {x: 0, y: 0};
  dancingCircleSize: CircleSize = {xRadius: 0, yRadius: 0};
  circleProgress: number = 0;
  name: string;
  private _font: string;

  constructor(graphicsContext: CanvasRenderingContext2D) {
    super(graphicsContext);
    this.graphicsContext.textAlign = 'center'
  }


  getImageAspectRatio(): number {
    return 2.94;
  }

  getImageFile(): string {
    return ParticipantImage
  }

  render(timestamp: number): void {

    const position = this.getCirclePosition(this.circleProgress / 100 * 360);
    this.graphicsContext.drawImage(this.image, position.x, position.y, this.width, this.height);
    this.graphicsContext.fillText(this.name, (position.x + this.width / 2), position.y + this.height + 35);

  }

  getCirclePosition(angle: number): Coordinates {
    var t = Math.tan(angle++ / 360 * Math.PI);
    var px = this.dancingCircleSize.xRadius * (1 - t ** 2) / (1 + t ** 2),
      py = this.dancingCircleSize.yRadius * 2 * t / (1 + t ** 2);

    return {
      x: px + this.dancingCircleCenter.x,
      y: py + this.dancingCircleCenter.y
    }

  }

  goStep() {
    this.circleProgress = this.circleProgress > 100 ? this.circleProgress - 100 + this.speed : this.circleProgress + this.speed;
  }
}
