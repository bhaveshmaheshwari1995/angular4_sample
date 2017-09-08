import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  carList:any;
  message:string;
  bikeList:any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.carList = this.dataService.cars;
    this.message = this.dataService.myMesssage();
    this.dataService.geBikeData().then(data => this.bikeList = data);
  }

}
