import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeModule } from 'primeng/tree';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowPreviousComponent } from './show-previous/show-previous.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FixturesComponent } from './fixtures/fixtures.component';
import { PointsTableComponent } from './points-table/points-table.component';
import { ErrorHandleComponent } from './error-handle/error-handle.component';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { FormsModule } from '@angular/forms';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShowPreviousComponent,
    HomeComponent,
    FixturesComponent,
    PointsTableComponent,
    ErrorHandleComponent,
    DetailedViewComponent,

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    TreeModule,
    OrganizationChartModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
