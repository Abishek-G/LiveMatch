import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service"
@Component({
  selector: 'app-show-previous',
  templateUrl: './show-previous.component.html',
  styleUrls: ['./show-previous.component.css']
})
export class ShowPreviousComponent implements OnInit {
  teams:any;
  constructor(private apiservice:AppService){}

  ngOnInit(): void {
      this.apiservice.getMatches().subscribe((res:any)=>{
      
        this.teams = res;
        console.log(this.teams)
  })
  }
}
