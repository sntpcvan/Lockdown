import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNoteContainerComponent } from './add-note/add-note-container/add-note-container.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {path:'addnote',component:AddNoteContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
