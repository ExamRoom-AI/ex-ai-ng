import { Routes, RouterModule } from '@angular/router';
import { AddExamsComponent } from './add-exams/add-exams.component';
import { EditExamsComponent } from './edit-exams/edit-exams.component';

export const routes: Routes = [
    { path: '', redirectTo: 'add-exams' },
    { path: 'add-exams', component: AddExamsComponent},
    { path: 'update-exams', component: EditExamsComponent},
];

export const routing = RouterModule.forChild(routes);