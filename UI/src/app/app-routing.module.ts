import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNoteContainerComponent } from './add-note/add-note-container/add-note-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './add-note/search-note/search-note.component';


const routes: Routes = [
  {path:'addnote',component:AddNoteContainerComponent },
  {path:'search', component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
