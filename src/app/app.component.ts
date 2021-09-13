import { isEmptyExpression } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  doctorDB: any[] = [];
  firstName = '';
  lastName = '';
  dob = '';
  suburb = '';
  state = '';
  postcode: number = 0;
  numPatient: number = -1 ;
  countZero = 0;

  saveDoctor(){

    let newDoctor={
      firstName: this.firstName,
      lastName: this.lastName,
      dob: this.dob,
      suburb: this.suburb,
      state: this.state,
      postcode: this.postcode,
      numPatient: this.numPatient
    }

    this.doctorDB.push(newDoctor);

    //checkZero Doctor
    this.countZero = this.countZeroPatient();
  }

  clearNoPatient() {
    for(let i = 0; i<this.doctorDB.length;i++){
      if(this.doctorDB[i].numPatient == 0){
        this.doctorDB.splice(i,1);
      }
    }
    // initialize the count
    this.countZero = 0;
  }

  clearDoctor(index:number){
    this.doctorDB.splice(index,1);
  }

  countZeroPatient(){
    let count = 0;
    for(let i = 0; i<this.doctorDB.length;i++){
      if(this.doctorDB[i].numPatient == 0){
        count++;
      }
    }
    return count;
  }

}
