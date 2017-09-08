import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
  
  constructor(private http:Http) { }
  
  cars = [
    {carName:'Ford',colour:'black'},
    {carName:'Doch Viper',colour:'green'},
    {carName:'Mustang',colour:'grey'},
    {carName:'Gallardo',colour:'Matt Black'},
    {carName:'Veron GT',colour:'white'}
  ];
  
  public geBikeData(){
    return new Promise( (resolve, reject) => {
      this.http.get('https://api.myjson.com/bins/upw5t').
      subscribe(response=> resolve(response.json()));
    })
  }

  /* geBikeData(){
    console.error('An error occurred'); // for demo purposes only
    return this.http.get('https://api.myjson.com/bins/upw5t')
    .subscribe(response => {
      response.json().data
      console.log(response.json().data)
    })
  } */
  
  myMesssage() {
    return 'Cars Printed!';
  }
  
}
