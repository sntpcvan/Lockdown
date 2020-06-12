import { TextContent } from '../add-note/writer/writer.component';

export interface Notes {
    id?: number;
    _id?: string;
    mainContent: TextContent[];
    //  userId: string;
    tags?: NotesTag[];
    rawhtml:string
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

export enum ViewType{
    Textual,
    Orginal,
    Tags
}