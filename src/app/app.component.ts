import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "My Paint Pal";
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: "Home",
        link: "./home",
        index: 0
      },
      {
        label: "Create",
        link: "./create",
        index: 1
      }
      // {
      //   label: "Third",
      //   link: "./third",
      //   index: 2
      // }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe(res => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find(tab => tab.link === "." + this.router.url)
      );
    });
  }
}
