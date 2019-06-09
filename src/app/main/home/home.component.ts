import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }

  disease = new FormControl('', [Validators.pattern('^[a-zA-Z ]*$')]);

}
