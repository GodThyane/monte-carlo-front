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

  constructor(private http: HttpClient) {
  }

  calc(integral: Integral): Observable<any> {
    return this.http.post<any>(`${this.url}area`, integral).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
