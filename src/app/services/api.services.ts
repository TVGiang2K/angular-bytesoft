import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const api: string = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) {};

    homeContest(){
        return this.http.get(`${api}/contest/api/list`);
    }


    getContestById(id: number): any {
      return this.http.get<any>(`${api}/contest/api/${id}`);
    }

  


}