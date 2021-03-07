import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Integral} from '../models/Integral';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  private url = environment.url;
  private url2 = environment.url2;
  private url3 = environment.url3;

  constructor(private http: HttpClient) {
  }

  calc(integral: Integral): Observable<any> {
    return this.http.post<any>(`${this.url}area`, integral).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  ping1(): Observable<any> {
    return this.http.get<any>(`${this.url}ping`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  ping2(): Observable<any> {
    return this.http.get<any>(`${this.url2}ping`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  ping3(): Observable<any> {
    return this.http.get<any>(`${this.url3}ping`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
