import ChristmasTree from "./sprites/ChristmasTree";
import {Participant} from "./sprites/Participant";
import {Coordinates} from "./types/Coordinates";
import {CircleSize} from "./types/CircleSize";

export default class Controller {
  private graphicsContext: CanvasRenderingContext2D;
  private christmasTree: ChristmasTree;
  private canvas: HTMLCanvasElement;
  private participants: { [key: string]: Participant } = {};
  private canvasWidth: number;
  private canvasHeight: number;
  private dpi: number;
  private participantWidth: number;
  private participantHeight: number;
  private dancingCircleCenter: Coordinates;
  private dancingCircleSize: CircleSize;
  private participantFont: string;

  init(selector: string) {
    window.addEventListener('resize', () => {
      this.calculateSizes();
      this.render();
    })

    this.createCanvas(selector);

    this.graphicsContext = this.canvas.getContext('2d');

    this.christmasTree = new ChristmasTree(this.graphicsContext);
    this.calculateSizes();
    return this.christmasTree.loadImage();
  }

  addParticipant(name: string) {
    const participant = new Participant(this.graphicsContext);
    participant.width = this.participantWidth;
    participant.dancingCircleCenter = this.dancingCircleCenter;
    participant.dancingCircleSize = this.dancingCircleSize;
    participant.name = name;
    participant.font = this.participantFont;
    participant.loadImage().then(() => this.participants[Controller.makeId()] = participant);

  }

  private calculateSizes() {
    this.dpi = window.devicePixelRatio;

    this.canvasWidth = Math.max(this.canvas.clientWidth || 0);
    this.canvasHeight = Math.max(this.canvas.clientHeight || 0);

    let styleHeight = +getComputedStyle(this.canvas).getPropertyValue("height").slice(0, -2);
    let styleWidth = +getComputedStyle(this.canvas).getPropertyValue("width").slice(0, -2);
    this.canvas.setAttribute('height', (styleHeight * this.dpi).toString());
    this.canvas.setAttribute('width', (styleWidth * this.dpi).toString());

    this.christmasTree.width = this.canvasWidth * 0.2 * this.dpi;
    this.christmasTree.position.x = (this.canvasWidth / 2 * this.dpi - this.christmasTree.width / 2);
    this.christmasTree.position.y = (this.canvasHeight / 2 * this.dpi - this.christmasTree.height / 2)

    this.participantWidth = this.canvasWidth / 15;
    this.participantHeight = this.participantWidth * new Participant(this.graphicsContext).getImageAspectRatio();

    this.dancingCircleCenter = {
      x: (this.canvasWidth * this.dpi / 2) - this.participantWidth / 2,
      y: (this.canvasHeight * this.dpi / 2) - this.participantHeight / 2
    };
    this.dancingCircleSize = {xRadius: this.canvasWidth / 3 * this.dpi, yRadius: this.canvasHeight / 3 * this.dpi};
    this.participantFont = this.canvasWidth / 35 + 'px Arial';


    Object.values(this.participants).forEach(participant => {
      participant.width = this.participantWidth;
      participant.dancingCircleCenter = this.dancingCircleCenter;
      participant.dancingCircleSize = this.dancingCircleSize;
      participant.font = this.participantFont;
    });

  }

  private createCanvas(selector: string) {
    this.canvas = document.createElement('canvas');
    this.canvas.style.width = '100vw'
    this.canvas.style.height = '100vh'
    this.canvas.id = 'christmas-tree-canvas;'
    document.querySelector(selector).append(this.canvas);
  }

  start() {
    setInterval(() => {
      this.render();
    }, 1)
  }

  render() {
    const timestamp = Date.now();
    this.graphicsContext.clearRect(0, 0, this.canvasWidth * this.dpi, this.canvasHeight * this.dpi);
    this.christmasTree.render(timestamp);

    const participants = Object.values(this.participants);

    participants.filter(participant => participant.circleProgress > 50).forEach(participant => {
      participant.goStep();
      participant.render(timestamp);
    })

    this.christmasTree.render(timestamp);

    participants.filter(participant => participant.circleProgress < 50).forEach(participant => {
      participant.goStep();
      participant.render(timestamp);
    })


  }

  private static makeId(length = 8) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }


}
