import { TextContent } from '../add-note/writer/writer.component';

export interface Notes {
    id?: number;
    mainContent: TextContent[];
  //  userId: string;
    tags?: NotesTag[];
}

export interface NotesTag {
    id: number;
    tags: Tags;
}

export interface Tags {
    name: string;
    code: string;
    remainder: Remainder;
}

export interface Remainder {

}