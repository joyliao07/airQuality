import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from "./your-city.model";
import { Router} from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-your-city',
  templateUrl: './your-city.component.html',
  styleUrls: ['./your-city.component.css']
})

export class YourCityComponent implements OnInit {
  loadedYourCity: Post = {status: "None"};
  loadedSeattle: Post = {status: "None"};
  loadedNY: Post = {status: "None"};
  loadedParis: Post = {status: "None"};
  loadedFerrandina: Post = {status: "None"};
  loadedNewDelhi: Post = {status: "None"};
  loadedHK: Post = {status: "None"};
  loadedSingapore: Post = {status: "None"};
  loadedTehran: Post = {status: "None"};
  loadedAnkara: Post = {status: "None"};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  fetchYourCityData() {
    // https://api-docs.airvisual.com/?version=latest
    // https://air-quality-proxy.herokuapp.com/
    // this.http.get("https://api.airvisual.com/v2/nearest_city?key=" + environment.airVisualAPI)
    // .subscribe(data => {
    //   this.loadedYourCity = data;
    // });
    this.http.get("https://air-quality-proxy.herokuapp.com")
    .subscribe(data => {
      this.loadedYourCity = data;
    });
  }

  fetchSeattle() {
    this.http.get("https://api.airvisual.com/v2/city?city=Seattle&state=Washington&country=USA&key=" + environment.airVisualAPI)
    .subscribe(data => {
      this.loadedSeattle = data;
    });
  }

  fetchNY() {
    this.http.get("https://api.airvisual.com/v2/city?city=New%20York%20City&state=New%20York&country=USA&key=" + environment.airVisualAPI)
    .subscribe(data => {
      this.loadedNY = data;
    });
  }

  fetchParis() {
    this.http.get("http://api.airvisual.com/v2/city?city=Paris&state=Ile-de-France&country=France&key=" + environment.airVisualAPI)
    .subscribe(data => {
      this.loadedParis = data;
    });
  }

  fetchFerrandina() {
    this.http.get("http://api.airvisual.com/v2/city?city=Ferrandina&state=Basilicate&country=Italy&key=" + environment.airVisualAPI)
    .subscribe(data => {
      this.loadedFerrandina = data;
    });
  }

  fetchNewDelhi() {
    this.http.get("http://api.airvisual.com/v2/city?city=New%20Delhi&state=Delhi&country=India&key=" + environment.airVisualAPI)
    .subscribe(data => {
      this.loadedNewDelhi = data;
    });
  }

  fetchHK() {
    this.http.get("http://api.airvisual.com/v2/city?city=Hong%20Kong&state=Hong%20Kong&country=Hong%20Kong&key=" + environment.airVisualAPI)
    .subscribe(data => {
      this.loadedHK = data;
    });
  }

  fetchSingapore() {
    this.http.get("https://api.airvisual.com/v2/city?city=Singapore&state=Singapore&country=Singapore&key=" + environment.airVisualAPI)
    .subscribe(data => {
      this.loadedSingapore = data;
    });
  }

  fetchTehran() {
    this.http.get("https://api.airvisual.com/v2/city?city=Tehran&state=Tehran&country=Iran&key=" + environment.airVisualAPI)
    .subscribe(data => {
      this.loadedTehran = data;
    });
  }

  fetchAnkara() {
    this.http.get("https://api.airvisual.com/v2/city?city=Ankara&state=Ankara&country=Turkey&key=" + environment.airVisualAPI)
    .subscribe(data => {
      this.loadedAnkara = data;
    });
  }

  requestData() {
    this.router.navigate(['contact']);
  }

}
