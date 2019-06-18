import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remedy-blog',
  templateUrl: './remedy-blog.component.html',
  styleUrls: ['./remedy-blog.component.scss']
})
export class RemedyBlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 myFunction(id1,id2,id3) {
    var dots = document.getElementById(id2);
    var moreText = document.getElementById(id3);
    var btnText = document.getElementById(id1);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

}
