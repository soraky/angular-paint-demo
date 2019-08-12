import {
  Component,
  OnInit,
  NgModule,
  ViewChild,
  AfterViewInit
} from "@angular/core";
// import { DrawingsListComponent } from '../drawings-list/drawings-list.component'
import { DRAWINGS } from "../mock-drawings";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
@NgModule({
  // declarations: [ DrawingsListComponent ],
})
export class HomeComponent implements OnInit {
  homeDrawings = DRAWINGS;

  constructor() {}

  ngOnInit() {}
}
