import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../drawing';

@Component({
  selector: 'drawing-thumbnail',
  templateUrl: './drawing-thumbnail.component.html',
  styleUrls: ['./drawing-thumbnail.component.css']
})
export class DrawingThumbnailComponent implements OnInit {
  @Input() thumbnailCurrentDrawing: Content;

  constructor() { }

  ngOnInit() {
  }
}
