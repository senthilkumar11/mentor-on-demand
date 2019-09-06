import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/service/payment.service';
import { Proposal } from 'src/app/models/proposal';
import { Router } from '@angular/router';
import { TrainingService } from 'src/app/service/training.service';

@Component({
  selector: 'app-requested-proposal',
  templateUrl: './requested-proposal.component.html',
  styleUrls: ['./requested-proposal.component.css']
})
export class RequestedProposalComponent implements OnInit {
  proposal:Proposal[];
  constructor(private trainingService:TrainingService,private paymentService:PaymentService,private router: Router) { }

  ngOnInit() {
    let email = sessionStorage.getItem("username");
  console.log(email);
  this.paymentService.getUserProposal(email).subscribe(response => {this.proposal = response
  console.log(response);
  });
  }

  isApproved(temp)
  {
    console.log("one")
    if(temp==="no"||temp==="declined")
    return true;
    else
    return false;
  }
  isBending(temp)
  {
    if(temp==="declined")
    return false;
    else
    return true;
  }
  isPaid(temp,paid)
  {
    if(temp==="yes"&&paid==="no")
    return true;
    else
    return false;
  }
  payFee(prop)
  {
    prop.payment="yes";
    this.paymentService.addProposal(prop).subscribe(response => {console.log( response)})
    this.trainingService.addTraining(prop).subscribe(response => {console.log( response)})
      alert('Payment succesful');
      this.router.navigate(['/requested'])
  }
}
