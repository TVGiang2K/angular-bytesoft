import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

const api = 'https://api-vote-app.onrender.com';
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

  getContestById(id: number,): any {
    return this.http.get<any>(`${api}/contest/api/${id}`);
  }

  checkLogin(data: any) {
    return this.http.post<any>(`${api}/account/api/loginUser`, data, {
      withCredentials: true,
    });
  }

  getProfile() {
    return this.http.get<any>(`${api}/api/profile`, { withCredentials: true });
  }

  logout() {
    return this.http.get(`${api}/api/logout`, { withCredentials: true });
  }

  getAccountInfor() {
    let account = localStorage.getItem('profile');
    if (account) {
      return JSON.parse(account);
    } else {
      return null;
    }
  }

  homeContestList() {
    return this.http.get(`${api}/contest/api/list`);
  }

  homeCandidateList() {
    return this.http.get(`${api}/candidates/api/list`);
  }

  getCandidateById(id: number): any {
    return this.http.get<any>(`${api}/candidates/api/${id}`);
  }

  get_register(data: any): any {
    return this.http.post<any>(`${api}/register`, data);
  }

  historyVote(){
    return this.http.get<any>(`${api}/account/api/historyVoting`,{withCredentials:true});
  }

  action_vote_candidate(idCandidate:number,quantityVote:number){
    return this.http.get<any>(`${api}/account/vote/${idCandidate}/${quantityVote}`,{withCredentials:true});
  }

  add_money(money:any,idUser:any){
    let data = {
      money,
      idUser
    }
    console.log(data);
    return this.http.post<any>(`${api}/account/recharge`,data,{withCredentials:true});
  }

  get_recharge_history(){
      return this.http.get<any>(`${api}/account/recharge-history`,{withCredentials:true})
  }
  changePass(data:any){
    return this.http.post<any>(`${api}/account/api/change-password`,data,{withCredentials:true});
  }

}
