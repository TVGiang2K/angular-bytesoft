import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const api = 'http://localhost:3000';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  profile: any;

  constructor(private http: HttpClient) {}
  listContest() {
    return this.http.get(`${api}/contest/api/list`);
  }

  listCandidates() {
    return this.http.get(`${api}/candidates/api/list`);
  }
  homeContest() {
    return this.http.get(`${api}/contest/api/list`);
  }

  getContestById(id: number): any {
    return this.http.get<any>(`${api}/contest/api/${id}`);
  }

  checkLogin(data:any){
    return this.http.post(`${api}/api/loginUser`,data)
  }

  getProfile(){
    console.log(this.profile)
    return this.profile
  }
}
