import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNoteContainerComponent } from './add-note-container/add-note-container.component';
import { WriterComponent } from './writer/writer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/core/core.module';
import { NotesStore } from '../store/notes.store';
import { NotesBusiness } from './add-note-container/add-note-business';



@NgModule({
  declarations: [AddNoteContainerComponent, WriterComponent],
  imports: [
    CommonModule, ReactiveFormsModule, CoreModule
  ],
  providers: [NotesStore, NotesBusiness]
})
export class AddNoteModule { }
