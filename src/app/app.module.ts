import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { DrawingBoardComponent } from './drawing-board/drawing-board.component';
import { DrawingsListComponent } from './drawings-list/drawings-list.component';
import { DrawingThumbnailComponent } from './drawing-thumbnail/drawing-thumbnail.component';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CreateComponent, DrawingBoardComponent, DrawingsListComponent, DrawingThumbnailComponent, ShowComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    AppRoutingModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
