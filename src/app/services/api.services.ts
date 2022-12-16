import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const api: string = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) {};

    homeContestList(){
        return this.http.get(`${api}/contest/api/list`);
    }


    getContestById(id: number): any {
      return this.http.get<any>(`${api}/contest/api/${id}`);
    }

    homeCandidateList(){
      return this.http.get(`${api}/candidates/api/list`);
    }

    getCandidateById(id: number): any {
      return this.http.get<any>(`${api}/candidates/api/${id}`);
    }

  
    get_register(data: any): any {      
      return this.http.post<any>(`${api}/register`, data);
    }


}