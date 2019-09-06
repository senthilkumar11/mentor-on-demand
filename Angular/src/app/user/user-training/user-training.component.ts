import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/service/training.service';
import { Router } from '@angular/router';
import { Training } from 'src/app/models/training';

@Component({
  selector: 'app-user-training',
  templateUrl: './user-training.component.html',
  styleUrls: ['./user-training.component.css']
})
export class UserTrainingComponent implements OnInit {

  training:Training[];
  completion:number;
  constructor(private trainingService:TrainingService,private router: Router) { }

  ngOnInit() {
    let email = sessionStorage.getItem("username");
  console.log(email);
  this.trainingService.getUserTraining(email).subscribe(response => {this.training = response
  console.log(response);
  });
  }

  isCompleted(temp)
  {
    console.log("one")
    if(temp<100)
    return true;
    else
    return false;
  }
  updateCompletion(train,completion)
  {
    console.log(train);
    train.completion=completion;
    this.trainingService.addTraining(train).subscribe(response => {console.log( response)})
      alert('completion status updated');
      this.router.navigate(['/ongoingusertraining'])
  }
}
