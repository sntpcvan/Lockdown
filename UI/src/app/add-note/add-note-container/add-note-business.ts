import { Inject, Injectable } from "@angular/core";
import { Notes } from 'src/app/store/notes.model';
import { TextContent } from '../writer/writer.component';

@Injectable()
export class NotesBusiness {
    /**
     *
     */
    constructor() {

    }

    public mapToStore(uiObj: TextContent[]): Notes {
        const data: Notes = {
            mainContent: uiObj,
        };
        return data;
    }
}