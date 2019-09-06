import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proposal } from '../models/proposal';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = 'http://localhost:9091';
  constructor(private http: HttpClient) { }

  addProposal(proposal):Observable<any>
  {
    {
      console.log('proposal')
    return this.http.post(`${this.baseUrl}`+`/setproposal`,proposal);
    } 
  }
  
  getMentorProposal(email):Observable<any>
  {
    console.log("get user proposal");
    return this.http.get<Proposal[]>(`${this.baseUrl}`+'/findproposebymentor/'+email);
  }
  getUserProposal(email):Observable<any>
  {
    console.log("get user proposal");
    return this.http.get<Proposal[]>(`${this.baseUrl}`+'/findproposebyuser/'+email);
  }
  

}

