import { Component, OnInit } from '@angular/core';
import { TextContent, WriterEmit } from '../writer/writer.component';
import { Subject, Observable } from 'rxjs';
import { NotesStore } from 'src/app/store/notes.store';
import { NotesBusiness } from './add-note-business';
import { Notes } from 'src/app/store/notes.model';

@Component({
  selector: 'app-add-note-container',
  templateUrl: './add-note-container.component.html',
  styleUrls: ['./add-note-container.component.css']
})
export class AddNoteContainerComponent implements OnInit {

  constructor(private notesStore: NotesStore, private business: NotesBusiness) { }
  collectTextSubject: Subject<void> = new Subject<void>();
  toastMessage:Observable<string>;


  ngOnInit() {
  }

  textContent(value: WriterEmit) {
    let text = value.text;
    if(text.length == 1 && text[0].data == "") return;
    const data: Notes = this.business.mapToStore(text, value.rawhtml)
   this.toastMessage = this.notesStore.saveNote(data);
  }

  clickSave() {
    this.collectTextSubject.next();
  }


}
