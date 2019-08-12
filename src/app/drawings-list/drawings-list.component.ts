import { Component, OnInit, Input } from "@angular/core";
import { Drawing } from "../drawing";
// import { DrawingThumbnailComponent } from '../drawing-thumbnail/drawing-thumbnail.component';

@Component({
  selector: "drawings-list",
  templateUrl: "./drawings-list.component.html",
  styleUrls: ["./drawings-list.component.css"]
})
export class DrawingsListComponent implements OnInit {
  @Input() listDrawings: Array<Drawing>;

  constructor() {}

  ngOnInit() {
  }
}
