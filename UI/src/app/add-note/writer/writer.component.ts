import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject, Observable } from 'rxjs';


@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})
export class WriterComponent implements OnInit {

  constructor() { }
  writerForm: FormGroup;
  @Input() collectData: Observable<void>;
  @Output() textContent = new EventEmitter<WriterEmit>();


  ngOnInit() {
    this.writerForm = new FormGroup({
      textZone: new FormControl('')
    });
    this.writerForm.controls['textZone'].setValue('24323');
    this.collectData.subscribe(c => { this.getTextFromWriter() });
  }

   removeFormat():void{
    const element = document.getElementById('textWriterZone');
    const innetText = element.innerText;
    element.innerHTML = innetText;
  }

  private getTextFromWriter(): void {
    const element = document.getElementById('textWriterZone');
    const parsed = this.parseNextLine(element.innerText);
    const rawHtml = element.innerHTML;
    element.innerHTML = "";
    this.textContent.emit({text:parsed, rawhtml:rawHtml});
  }

  private parseNextLine(raw: string): TextContent[] {
    const parsed = raw.split('\n').map(o => {
      return {
        attribute: TextAttribute.NextLine,
        data: o
      } as TextContent
    });
    return parsed;
  }

}
export enum TextAttribute {
  NextLine = '\n',
  Bole = '<b>'
}

export class TextContent {
  attribute: string;
  data: string;
}

export class WriterEmit{
  text: TextContent[];
  rawhtml:string;
}