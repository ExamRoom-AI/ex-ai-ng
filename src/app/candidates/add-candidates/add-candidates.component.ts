import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
const examRoom = new ExamRoom();

@Component({
  selector: 'app-add-candidates',
  templateUrl: './add-candidates.component.html',
  styleUrls: ['./add-candidates.component.scss']
})
export class AddCandidatesComponent implements OnInit {
  apiKey = "2020430";
  secretKey = "CE9A0BE5-D894-4DB8-959D-31434C1F3B86";
  form: FormGroup;
  firstName: AbstractControl;
  lastName: AbstractControl;
  email: AbstractControl;
  addressOne: AbstractControl;
  addressTwo: AbstractControl;
  city: AbstractControl;
  state: AbstractControl;
  zip: AbstractControl;
  countryCode: AbstractControl;
  mobileNumber: AbstractControl;
  landlineNumber: AbstractControl;
  candidateDetails: any[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      addressOne: ['', Validators.required],
      addressTwo: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      countryCode: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      landlineNumber: ['', Validators.required],
    })

    this.firstName = this.form.controls['firstName'];
    this.lastName = this.form.controls['lastName'];
    this.email = this.form.controls['email'];
    this.addressOne = this.form.controls['addressOne'];
    this.addressTwo = this.form.controls['addressTwo'];
    this.city = this.form.controls['city'];
    this.state = this.form.controls['state'];
    this.zip = this.form.controls['zip'];
    this.countryCode = this.form.controls['countryCode'];
    this.mobileNumber = this.form.controls['mobileNumber'];
    this.landlineNumber = this.form.controls['landlineNumber'];
  }
  
  add(value){
    var random = Math.floor(Math.random() * Math.floor(1000000));
    let a = {
        candidateId: String(random),
        firstName: value.firstName,
        lastName:  value.lastName,
        addressLine1:  value.addressOne,
        addressLine2:  value.addressTwo,
        city:  value.city,
        stateCode: random,
        postalCode:  value.zip,
        countryCode:  value.countryCode,
        mobileTelephoneNumber:  value.mobileNumber,
        telephoneNumber:  value.landlineNumber,
        emailAddress: value.email,
        gropID: 12345,
        groupName: "MansoorTestGroup"
    }

    this.candidateDetails.unshift(a);
    this.form.reset();
  }

  submit(){
    if(this.candidateDetails.length > 0){
      examRoom.addCandidates(this.apiKey, this.secretKey, this.candidateDetails)
      .then(data => console.log(data))
      .catch(err => console.log(err));
    }
  }
}
