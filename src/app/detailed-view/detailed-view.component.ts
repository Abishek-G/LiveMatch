import { Component } from '@angular/core';
import { AppService } from "../app.service"
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css']
})
export class DetailedViewComponent {
  teams: any = [];
  params: any;
  errorMsg: any;
  constructor(private apiservice: AppService, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    
   
    this.route.params.subscribe((params) => {
      this.teams.push(params);
    });
    this.apiservice.getMatches().subscribe((res: any) => {
      res.some((match_id: any) => {
        if (this.teams[0].match_id == match_id.id) {
          this.teams.push(match_id);
        }
      });
    });
  }
}
