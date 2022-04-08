import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class FilmsPage implements OnInit {

  films: Observable<any>;
 
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.films = this.http.get('https://swapi.dev/api/people');
  }
 
  openDetails(people) {
    let split = people.url.split('/');
    
    this.router.navigateByUrl(`/tabs/people/${people}`);
  }

}