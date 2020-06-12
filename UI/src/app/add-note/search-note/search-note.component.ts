import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Notes, ViewType } from 'src/app/store/notes.model';
import { FormGroup, FormControl } from '@angular/forms';
import { NotesBusiness } from '../add-note-container/add-note-business';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
// import { SecurityContext } from '@angular/compiler/src/core';

@Component({
    selector: 'search-container',
    templateUrl: './search-note.component.html',
    styleUrls: ['./search-note.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
    searchFormGrp: FormGroup;
    notes: Notes[];
    searchSub: Subject<string> = new Subject<string>();
    currentViewType = ViewType;
    selectedView: ViewType;
    buttonGroupDirty:boolean;

    /**
     *
     */
    constructor(private business: NotesBusiness, private sanitized: DomSanitizer) {
    }
    ngOnInit(): void {
        this.searchFormGrp = new FormGroup({
            searchTextInput: new FormControl('')
        });

        this.searchFormGrp.controls['searchTextInput'].valueChanges.subscribe(s => {
            if (s.length <= 3) {
                return;
            }
            this.searchSub.next(s);
        }
        );

        this.searchSub.pipe(
            debounceTime(1000)
        ).subscribe(async s => {
            let notes = await this.business.searchNote(s);
            //  notes.forEach(s => this.sanitized.bypassSecurityTrustHtml(s.rawhtml))
            this.notes = notes;

        })
    }

    getHtml(html) {
        const htmls = this.sanitized.sanitize(1, this.sanitized.bypassSecurityTrustHtml(html));
        return htmls;
    }

    onViewModeClick(value: ViewType) {
        this.selectedView = value;
        this.buttonGroupDirty = true;
    }

}


import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
    constructor(private sanitized: DomSanitizer) { }
    transform(value) {
        const replacedQuotes = value.replace(/&quot;/g, '\'');
        const stripped = this.sanitized.sanitize(1, this.sanitized.bypassSecurityTrustHtml(replacedQuotes));
        // let ss = document.getElementById('viewr');
        // ss.style.color = 'red';
        let parser = new DOMParser();
        let ourDOM = parser.parseFromString(stripped, "text/xml");
        let style = ourDOM.children[0].getAttribute('style')
        let ss = document.getElementById('viewr');

        ss.setAttribute('style', style);

        // ss.appendChild(ourDOM);
        return stripped;
    }
}