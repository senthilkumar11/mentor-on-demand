import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/models/training';
import { TrainingService } from 'src/app/service/training.service';

@Component({
  selector: 'app-list-training',
  templateUrl: './list-training.component.html',
  styleUrls: ['./list-training.component.css']
})
export class ListTrainingComponent implements OnInit {
  training:Training[];

  constructor(private trainingService:TrainingService) { }

  ngOnInit() {

  this.trainingService.getTraining().subscribe(response => {this.training = response
  console.log(response);
  });
  }

  isCompleted(temp)
  {
    console.log("one")
    if(temp>=100)
    return true;
    else
    return false;
  }
  
}
