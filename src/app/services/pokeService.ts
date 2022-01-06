import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { Pokemon } from '../models/pokemon';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

    private url ='http://poketest-env.eba-ry5hhi53.us-east-1.elasticbeanstalk.com/pokeRest/'
  

    constructor(private http: HttpClient) { }

    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
       })
    };
    
  getPokemon(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.url + 'get/'+ name)
    .pipe( catchError(error => {
      let errorMsg: string;
      if (error.error.message !=="") {
        Swal.fire('',  error.error.message, 'error');
        errorMsg = error.error.message;

      } else {
          errorMsg = this.getServerErrorMessage(error);
      }

      return throwError(errorMsg);
  }))

  }

private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
        case 404: {
            return `Not Found: ${error.message}`;
        }
        case 403: {
            return `Access Denied: ${error.message}`;
        }
        case 500: {
            return `Internal Server Error: ${error.message}`;
        }
        default: {
            return `Unknown Server Error: ${error.message}`;
        }

    }
}

}