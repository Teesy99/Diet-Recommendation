import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  searchForm: FormGroup;

  diseaseGroups: DiseaseGroup[] = [{
    letter: 'C',
    names: ['Constipation']
  }, {
    letter: 'D',
    names: ['Diabetes','Dehydration','Diarrhea','Dysentry',]
  },
  {
    letter: 'O',
    names: ['Obesity']
  }
]
  
  diseaseGroupOptions: Observable<DiseaseGroup[]>;

  constructor(private fb:FormBuilder,private router: Router) { }

  ngOnInit() {

    this.searchForm = this.fb.group({
      disease: ['',  Validators.compose([
        Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(3),Validators.required])]
    });

    this.diseaseGroupOptions = this.searchForm.get('disease')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );

  }

  private _filterGroup(value: string): DiseaseGroup[] {
    if (value) {
      return this.diseaseGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.diseaseGroups;
  }

  onSubmit(){
let navigationExtras: NavigationExtras = {
  queryParams: {
      "name":this.searchForm.value.disease
  }
};
this.router.navigate(["/search"], navigationExtras);
  }

  get d() {
    return this.searchForm.get('disease');
  }
  
}

export interface DiseaseGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};