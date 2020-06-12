import { Inject, Injectable } from "@angular/core";
import { Notes } from 'src/app/store/notes.model';
import { TextContent } from '../writer/writer.component';
import { NotesStore } from 'src/app/store/notes.store';

@Injectable()
export class NotesBusiness {

    /**
     *
     */
    constructor(private store: NotesStore) {

    }

    public mapToStore(uiObj: TextContent[], rawHTML: string): Notes {
        const data: Notes = {
            mainContent: uiObj,
            rawhtml: rawHTML
        };
        return data;
    }

    public async searchNote(key: string): Promise<Notes[]> {
        const data = await this.store.searchNote(key).toPromise();
        data.forEach(d => {
            if (d.rawhtml) {
                d.rawhtml = d.rawhtml
            }
        }
        );
        return data;
    }
}