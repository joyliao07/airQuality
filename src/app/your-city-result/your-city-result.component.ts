import { Component, OnInit, Input } from '@angular/core';
import { Post } from "../your-city/your-city.model";

@Component({
  selector: 'app-your-city-result',
  templateUrl: './your-city-result.component.html',
  styleUrls: ['./your-city-result.component.css']
})
export class YourCityResultComponent implements OnInit {

  @Input() result: Post;

  constructor() { }

  ngOnInit(): void {
  }

  clearResult() {
    this.result.status = "false";
  }

}
