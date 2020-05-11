
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ServiceHost } from 'src/app/contants/http.uri.constant';

@Injectable()
export class HttpCommunication {



    constructor(private http: HttpClient) {

    }
    public get<T>(url: string): Observable<T> {
        return this.http.get<T>(url);
    }

    public post<T>(url: string, body: any): Observable<T> {
        url = ServiceHost.host + url;
        return this.http.post<T>(url, body);
        //  this.http.get<T>("https://localhost:44300/api/values").subscribe(s=> console.log(s));
        //  return undefined;
    }


}

