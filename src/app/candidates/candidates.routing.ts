import { Routes, RouterModule } from '@angular/router';
import { AddCandidatesComponent } from './add-candidates/add-candidates.component';
import { EditCandidatesComponent } from './edit-candidates/edit-candidates.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    { path: '', redirectTo: 'add-candidates' },
    { path: 'add-candidates', component: AddCandidatesComponent },
    { path: 'edit-candidates', component: EditCandidatesComponent },
    { path: 'search', component: SearchComponent },
];

export const routing = RouterModule.forChild(routes);