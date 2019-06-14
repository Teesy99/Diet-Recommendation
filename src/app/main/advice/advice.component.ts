import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss']
})


export class AdviceComponent implements OnInit {

  constructor() {  
   }

  ngOnInit() {
  }
  
  jumpToId( fragment ) {
    window.location.hash = fragment;
    if (fragment) {
        const element = document.querySelector('#' + fragment);
        if (element) element.scrollIntoView();
    }
}}
