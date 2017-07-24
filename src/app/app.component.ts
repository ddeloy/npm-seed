import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navs = [
    {url: "", content: "Home"},
    {url: "basic", content: "Basic"}
  ];

}
