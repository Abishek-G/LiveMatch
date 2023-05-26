import { Component } from '@angular/core';
import { AppService } from "../app.service";
@Component({
  selector: 'app-points-table',
  templateUrl: './points-table.component.html',
  styleUrls: ['./points-table.component.css']
})
export class PointsTableComponent {
  teams:any;
  constructor(private apiservice:AppService){}

  ngOnInit(): void {
      this.apiservice.getPoints().subscribe((res:any)=>{    
        this.teams = res;
  })
  }
}
