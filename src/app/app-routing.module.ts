import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorHandleComponent } from './error-handle/error-handle.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PointsTableComponent } from './points-table/points-table.component';

import { ShowPreviousComponent } from './show-previous/show-previous.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';

const routes: Routes = [
  {path:'',component:NavbarComponent,
children:[
 {path:'',component: HomeComponent},
 {path:'home',component:HomeComponent},
 {path: 'details',component:DetailedViewComponent},
 {path:'previous',component:ShowPreviousComponent},
 {path:'fixtures',component:FixturesComponent},
 {path: 'points_table',component:PointsTableComponent}
]
},
{ path: '**', pathMatch: 'full', 
component: ErrorHandleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NavbarComponent,HomeComponent,DetailedViewComponent,ShowPreviousComponent,FixturesComponent,PointsTableComponent,ErrorHandleComponent]