import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";
import { Drawing, Content } from "../drawing";

@Component({
  selector: "drawing-board",
  templateUrl: "./drawing-board.component.html",
  styleUrls: ["./drawing-board.component.css"]
})
export class DrawingBoardComponent implements OnInit {
  @Input() drwaingBoardReadOnly: boolean;
  @Input() existingDrawing: Drawing;
  @ViewChild("canvas", { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  drawingStrokes: Array<Content>; //JSON.parse(JSON.stringify(this.strokes)),  
  drawing: Drawing;
  lastX: number;
  lastY: number;
  currentX: number;
  currentY: number;
  allowDrawing: boolean;
  currentColor: string;
  currentWidth: number;
  firstStroke: boolean;
  timeOfDrawing: number;
  timer: number;

  // mouse: {
  //   _current: {
  //     x: 0;
  //     y: 0;
  //   };
  // };
  // get current() {
  //   return this.mouse._current;
  // }
  // set current(value) {
  //   this.mouse._current.x = value.x;
  //   this.mouse._current.y = value.y;
  // }

  constructor() {}

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext("2d");
    this.draw();
  }

  draw() {

    this.ctx.clearRect(0, 0, 800, 800);

    const drawingStrokes = this.drwaingBoardReadOnly ? this.existingDrawing.content : this.drawingStrokes;

    drawingStrokes.forEach(draw => {
      this.ctx.beginPath();

      const [firstCordinate, ...otherCordinates] = draw.coordinates;

      this.ctx.moveTo(firstCordinate.x, firstCordinate.y);

      otherCordinates.forEach(coordinate => {
        this.ctx.lineTo(coordinate.x, coordinate.y);
      });

      this.ctx.strokeStyle = draw.color;
      this.ctx.lineWidth = draw.width;

      this.ctx.stroke();
    });

    // // Line from
    // this.ctx.moveTo(this.lastX, this.lastY);
    // // To
    // this.ctx.lineTo(this.currentX, this.currentY);
    // // Chosen color
    // this.ctx.strokeStyle = "#b52e31"; //this.currentColor;
    // // Chosen width
    // this.ctx.lineWidth = 10; //this.currentWidth;
    // // Draw it
    // this.ctx.stroke();
  }

  myTimer() {
    this.timeOfDrawing += 1;
  }

  getRatio() {
    const canvas = this.canvas;
    const actualWidth = canvas.nativeElement.getBoundingClientRect().width;
    const canvasWidth = canvas.nativeElement.width;
    return canvasWidth / actualWidth;
  }

  onMouseLeave(event): void {
    if (this.allowDrawing) {
      this.onMouseUp(event);
    }
  }

  onMouseEnter(event): void {}

  onMouseUp(event): void {
    if (!this.drwaingBoardReadOnly) {
      this.allowDrawing = false;
    }
  }

  onMouseDown(event): void {
    if (!this.drwaingBoardReadOnly) {
      if (!this.firstStroke) {
        this.firstStroke = true;
        this.timeOfDrawing = 0;
        // this.timer = setInterval(this.myTimer, 1000);
      }

      const newStrokes = this.drawingStrokes;

      const ratio = this.getRatio();

      // newStrokes.push({
      //   coordinates: {
      //     x: event.offsetX * ratio,
      //     y: event.offsetY * ratio
      //   },
      //   color: this.currentColor,
      //   width: this.currentWidth
      // });

      // event.$emit(newStrokes);
      if (event.offsetX !== undefined) {
        this.lastX = event.offsetX * ratio;
        this.lastY = event.offsetY * ratio;
      }
      //  else {
      //   this.lastX = event.layerX - event.currentTarget.offsetLeft;
      //   this.lastY = event.layerY - event.currentTarget.offsetTop;
      // }

      this.allowDrawing = true;

      // begins new line
      // this.ctx.beginPath();
    }
  }

  onMouseMove(event): void {
    if (this.allowDrawing) {
      const newStrokes = this.drawingStrokes;

      const ratio = this.getRatio();

      // var c = this.$refs.canvas;

      // const ratio = this.getRatio();

      // newStrokes[newStrokes.length - 1].coordinates.push({
      //   x: event.offsetX * ratio,
      //   y: event.offsetY * ratio
      // });

      // this.$emit("update:strokes", newStrokes);
      // this.draw();

      // get current mouse position
      if (event.offsetX !== undefined) {
        this.currentY = event.offsetY * ratio;
        this.currentX = event.offsetX * ratio;
      }
      //  else {
      //   this.currentX = event.layerX - event.currentTarget.offsetLeft;
      //   this.currentY = event.layerY - event.currentTarget.offsetTop;
      // }

      this.draw();

      // set current coordinates to last one
      this.lastX = this.currentX;
      this.lastY = this.currentY;
    }
  }
}
