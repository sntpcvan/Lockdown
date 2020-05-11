import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WriterComponent } from './add-note/writer/writer.component';
import { LayoutComponent } from './layout/layout.component';
import { AddNoteModule } from './add-note/add-note.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddNoteModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
