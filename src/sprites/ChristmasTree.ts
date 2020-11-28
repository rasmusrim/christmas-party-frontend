import {Coordinates} from "../types/Coordinates";
import ChristmasTreeImage from '../assets/tree.png';

export default class ChristmasTree {
  private position: Coordinates;
  private image: HTMLImageElement;
  private graphicsContext: CanvasRenderingContext2D;
  public scale: number = 0.2;

  constructor(x: number, y: number, graphicsContext: CanvasRenderingContext2D) {
    this.position = {x, y};
    this.graphicsContext = graphicsContext;
  }

  loadImage() {
    return new Promise(resolve => {
      this.image = new Image();
      this.image.src = ChristmasTreeImage;
      this.image.style.display = 'none';
      document.querySelector('body').append(this.image)
      this.image.onload = () => {
        resolve(true);
      }
    })
  }

  render() {
    this.graphicsContext.drawImage(this.image, this.position.x, this.position.y, 1350 * this.scale, 1800 * this.scale);
  }


}

