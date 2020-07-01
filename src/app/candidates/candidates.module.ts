import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCandidatesComponent } from './add-candidates/add-candidates.component';
import { EditCandidatesComponent } from './edit-candidates/edit-candidates.component';
import { SearchComponent } from './search/search.component';
import { CandidatesComponent } from './candidates.component';
import { routing } from './candidates.routing';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddCandidatesComponent, 
    EditCandidatesComponent, 
    SearchComponent, 
    CandidatesComponent
  ],
  imports: [
    CommonModule,
    routing,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CandidatesModule { }
