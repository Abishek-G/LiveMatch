import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private httpClient: HttpClient) { }

  getScore(){
    return this.httpClient.get('http://localhost:8080/api/all')
  }
  getMatches(){
    return this.httpClient.get('http://localhost:56957/api/Matches')
  }
  getFixtures(){
    return this.httpClient.get('http://localhost:56957/api/Fixtures')
  }

  getPoints(){
    return this.httpClient.get('http://localhost:56957/api/Teams')
  }

  getTeams(){
    return this.httpClient.get('http://localhost:56957/api/Teams')
  }
}