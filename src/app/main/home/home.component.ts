import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  
  searchForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {

    this.searchForm = this.fb.group({
      disease: ['',  Validators.compose([
        Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(3),Validators.required])]
    });

  }

  get d() {
    return this.searchForm.get('disease');
  }
  

}
