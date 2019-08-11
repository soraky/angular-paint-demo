import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'drawing-board',
  templateUrl: './drawing-board.component.html',
  styleUrls: ['./drawing-board.component.css']
})
export class DrawingBoardComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;  
  private ctx: CanvasRenderingContext2D;


  constructor() { }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
  } 
}
