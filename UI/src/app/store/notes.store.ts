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

    public saveNote(note: Notes): Observable<string> {
        return  this.http.post<string>(URI.SaveNote, note);
        
    }

    searchNote(key: string): Observable<Notes[]> {
        return this.http.get<Notes[]>(URI.SearchNotes + `?content=${key}`);
    }
}