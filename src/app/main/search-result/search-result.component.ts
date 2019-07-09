import { Component, OnInit } from '@angular/core';
import { Disease } from 'src/app/shared/disease';
import { DiseaseService } from 'src/app/services/disease.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  availableDisease:Disease[];
  query: String;
  name:String;
  url:String;
  cause:String;
  url1:String;
  diet:String;
  fruits: String;
  veg:String;
  symptoms:String;
  avoid:String;
  others:String;

  constructor(private route: ActivatedRoute,private dService:DiseaseService) {
    this.route.queryParams.subscribe(params => {
      this.query=params["name"];
  });

   }

  ngOnInit() {

    this.dService.getDisease(this.query).subscribe( 
      res => { 
        this.availableDisease=res;
        this.name=this.availableDisease[0].name;
        this.fruits=this.availableDisease[0].fruits;
       this.url=this.availableDisease[0].url;
       this.avoid=this.availableDisease[0].avoid;
       this.cause=this.availableDisease[0].cause;
       this.diet=this.availableDisease[0].diet;
       this.veg=this.availableDisease[0].veg;
       this.url1=this.availableDisease[0].url1;
       this.symptoms=this.availableDisease[0].symptoms;
       this.others=this.availableDisease[0].others;
      }, 
      err => console.log(err)
    );

  }

}
