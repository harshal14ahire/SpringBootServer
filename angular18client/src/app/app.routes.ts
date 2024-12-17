import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtutorialComponent } from './components/addtutorial/addtutorial.component';
import { TutorialslistComponent } from './components/tutorialslist/tutorialslist.component';
import { TutorialdetailsComponent } from './components/tutorialdetails/tutorialdetails.component';

export const routes: Routes = [
    { path: 'add', component: AddtutorialComponent },
    {path: 'tutorial', component:TutorialslistComponent },
    { path: 'tutorials/:id', component: TutorialdetailsComponent },
    { path: '', redirectTo: 'tutorials', pathMatch: 'full'}
];


