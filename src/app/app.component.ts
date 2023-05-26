import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ScoreApp';
  teams:any;
  constructor(private appservice:AppService){}

  ngOnInit(){

  
  }
}
