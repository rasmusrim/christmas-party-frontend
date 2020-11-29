
import ChristmasTreeImage from '../assets/tree.png';
import {Sprite} from "./Sprite";

export default class ChristmasTree extends Sprite {

  render(timestamp: number) {
    this.graphicsContext.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }

  getImageAspectRatio(): number {
    return 1.3333333;
  }

  getImageFile(): string {
    return ChristmasTreeImage;
  }


}

