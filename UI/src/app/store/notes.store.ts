import { Injectable } from "@angular/core";
import { Notes } from './notes.model';
import { HttpCommunication } from 'src/core/communication/core.http';
import { Observable } from 'rxjs/internal/Observable';
import { URI } from '../contants/http.uri.constant';

@Injectable()
export class NotesStore {
    /**
     *
     */
    constructor(private http: HttpCommunication) {

    }

    public getNote(): Observable<Notes> {
        return this.http.get<Notes>("");
    }

    public saveNote(note: Notes): Observable<boolean> {
        this.http.post<boolean>(URI.SaveNote, note).subscribe(s => console.log(s))
        return;
    }
}