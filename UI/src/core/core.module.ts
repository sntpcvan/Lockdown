
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpCommunication } from './communication/core.http';
@NgModule({
    declarations: [
        
    ],
    imports: [
        HttpClientModule
    ],

    providers: [HttpCommunication],
    bootstrap: []
})
export class CoreModule { }
