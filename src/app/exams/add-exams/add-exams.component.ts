import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-exams',
  templateUrl: './add-exams.component.html',
  styleUrls: ['./add-exams.component.scss']
})
export class AddExamsComponent implements OnInit {
  form: FormGroup;
  examName: AbstractControl;
  examDate: AbstractControl;
  examDuration: AbstractControl;
  examURL: AbstractControl;
  examDetails: any[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      examName: ['', Validators.required],
      examDate: ['', Validators.required],
      examDuration: ['', Validators.required],
      examURL: ['', Validators.required],
    })

    this.examName = this.form.controls['examName'];
    this.examDate = this.form.controls['examDate'];
    this.examDuration = this.form.controls['examDuration'];
    this.examURL = this.form.controls['examURL'];
  }

  add(value){
    let a = {
      examID: "",
      examName: value.examName,
      date: value.examDate,
      duration: value.examDuration,
      groupID: 12345,
      groupName: "GroupOpenAPI",
      ExamURL: value.examURL
    }
    this.examDetails.unshift(a);
  }
}
