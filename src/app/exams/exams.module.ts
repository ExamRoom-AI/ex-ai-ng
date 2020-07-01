import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamsComponent } from './exams.component';
import { AddExamsComponent } from './add-exams/add-exams.component';
import { EditExamsComponent } from './edit-exams/edit-exams.component';
import { routing } from './exams.routing';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ExamsComponent,
    AddExamsComponent, 
    EditExamsComponent
  ],
  imports: [
    CommonModule,
    routing,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ExamsModule { }
