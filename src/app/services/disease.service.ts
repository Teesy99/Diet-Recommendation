import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiseaseService {

  getUrl="/api/disease";
  constructor(private _http:HttpClient) { }

  getDisease(query:String)
  {
    this.getUrl="/api/disease" + "?name="+ query;
    console.log(this.getUrl);
    return this._http.get<any>(this.getUrl);
  }
}
