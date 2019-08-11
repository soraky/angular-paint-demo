import { Component, OnInit, NgModule } from '@angular/core';
import { DrawingBoardComponent } from '../drawing-board/drawing-board.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

@NgModule({
  declarations: [ DrawingBoardComponent ],
})

export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
