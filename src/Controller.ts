import ChristmasTree from "./sprites/ChristmasTree";

export default class Controller {
  private graphicsContext: CanvasRenderingContext2D;
  private christmasTree: ChristmasTree;
  private canvas: HTMLCanvasElement;

  private viewportWidth: number = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  private viewportHeight: number = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

  init(selector: string) {

    this.createCanvas(selector);

    this.graphicsContext = this.canvas.getContext('2d');

    this.christmasTree = new ChristmasTree(0, 0, this.graphicsContext);
    this.christmasTree.scale =
    return this.christmasTree.loadImage();

  }

  private createCanvas(selector: string) {
    this.canvas = document.createElement('canvas');
    this.canvas.style.width = '100vw'
    this.canvas.style.height = '100vh'
    this.canvas.id = 'christmas-tree-canvas;'
    document.querySelector(selector).append(this.canvas);
    let dpi = window.devicePixelRatio;
    let styleHeight = +getComputedStyle(this.canvas).getPropertyValue("height").slice(0, -2);
    let styleWidth = +getComputedStyle(this.canvas).getPropertyValue("width").slice(0, -2);
    this.canvas.setAttribute('height', (styleHeight * dpi).toString());
    this.canvas.setAttribute('width', (styleWidth * dpi).toString());

  }

  start() {
    console.log('Started')
    setInterval(() => {
      this.render();
    }, 1000)
  }

  render() {
    console.log('Rendering...')
    this.christmasTree.render();
  }

}
