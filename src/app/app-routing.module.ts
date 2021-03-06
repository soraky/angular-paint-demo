import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { CreateComponent } from "./create/create.component";
import { ShowComponent } from "./show/show.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  // { path: "app", component: AppComponent },
  { path: "home", component: HomeComponent },
  { path: "create", component: CreateComponent },
  { path: "show/:id", component: ShowComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
