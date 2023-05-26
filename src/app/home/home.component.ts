import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from "../app.service"
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  teams:any;
  groups:any;
  errorMsg:any;
  constructor(private apiservice:AppService,private route:Router){}

  ngOnInit(): void {
  this.apiservice.getMatches().subscribe((res:any)=>{  
      this.teams = res;
  },(error:any) => { 
    this.route.navigate(['/Error',error])
   })
  }
  
  showNextPage(teams:any){
    // this.route.navigate(['/live',teams])
    this.route.navigate(['/details',teams]);
  }
  

}
