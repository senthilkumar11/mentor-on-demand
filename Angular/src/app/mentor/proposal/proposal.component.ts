import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/service/payment.service';
import { Proposal } from 'src/app/models/proposal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {
  proposal:Proposal[];
  constructor(private paymentService:PaymentService,private router: Router) { }

  ngOnInit() {
    let email = sessionStorage.getItem("username");
  console.log(email);
  this.paymentService.getMentorProposal(email).subscribe(response => this.proposal = response);
  }

  isApproved(temp)
  {
    if(temp==="no")
    return true;
    else
    return false;
  }
  approveCourse(prop)
  {
    prop.proposal="yes";
    this.paymentService.addProposal(prop).subscribe(response => {console.log( response)})
      alert('approved succesfully');
      this.router.navigate(['/proposal'])
  }

  declineCourse(prop)
  {
    prop.proposal="declined"
    this.paymentService.addProposal(prop).subscribe(response => {console.log( response)})
    alert('Declined');
    this.router.navigate(['/proposal'])
  }
}
