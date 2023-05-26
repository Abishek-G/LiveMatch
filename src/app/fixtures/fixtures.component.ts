import { Component } from '@angular/core';
import { AppService } from "../app.service";

import { MessageService } from 'primeng/api'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css'],
  providers: [MessageService]
})
export class FixturesComponent {
  teams:any;
 
  constructor(private apiservice:AppService,private route:Router){};


  ngOnInit(): void {
      this.apiservice.getFixtures().subscribe((res:any)=>{   
        this.teams = res;
  },(error:any) => { 
    this.route.navigate(['/Error',error])
   })
  }
}
