import {Coordinates} from "../types/Coordinates";

export abstract class Sprite {
  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
    this._width = this._height / this.getImageAspectRatio();
  }

  get width(): number {
    return this._width;
  }
  set width(value: number) {
    this._width = value;
    this._height = this._width * this.getImageAspectRatio();
  }

  private _width: number;
  private _height: number;
  protected image: HTMLImageElement;
  public position: Coordinates = { x: 0, y: 0 };

  protected graphicsContext: CanvasRenderingContext2D;

  loadImage() {
    return new Promise(resolve => {
      this.image = new Image();
      this.image.src = this.getImageFile();
      this.image.style.display = 'none';
      document.querySelector('body').append(this.image)
      this.image.onload = () => {
        resolve(true);
      }
    })
  }


  constructor(graphicsContext: CanvasRenderingContext2D) {
    this.graphicsContext = graphicsContext;
  }

  abstract getImageAspectRatio(): number;
  abstract render(timestamp: number): void;
  abstract getImageFile(): string;

}
