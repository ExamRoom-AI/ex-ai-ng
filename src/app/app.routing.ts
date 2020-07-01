import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'candidates', pathMatch: 'full' },
    {
        path: '',
        children: [
            {
                path: 'candidates',
                loadChildren: './candidates/candidates.module#CandidatesModule'
            },
            {
                path: 'exams',
                loadChildren: './exams/exams.module#ExamsModule'
            },
        ]
    }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });