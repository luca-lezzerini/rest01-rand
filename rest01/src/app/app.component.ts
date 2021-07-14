import { Articolo } from './articolo';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articoli: Articolo[] = [];

  // 3 x 1!!!
  constructor(private http: HttpClient) {
  }

  carica() {
    console.log(1);
    let oss: Observable<Articolo[]> =
      this.http.get<Articolo[]>("https://jsonplaceholder.typicode.com/posts");
      console.log(2);
      oss.subscribe(risposta => {
        console.log(3);
        this.articoli = risposta;
      });
      console.log(4);

  }
}
