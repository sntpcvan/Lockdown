import { Component, OnInit } from '@angular/core';
import { TextContent } from '../writer/writer.component';
import { Subject } from 'rxjs';
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


  ngOnInit() {
  }

  textContent(text: TextContent[]) {
    if(text.length == 1 && text[0].data == "") return;
    const data: Notes = this.business.mapToStore(text)
    this.notesStore.saveNote(data);
  }

  clickSave() {
    this.collectTextSubject.next();
  }


}
