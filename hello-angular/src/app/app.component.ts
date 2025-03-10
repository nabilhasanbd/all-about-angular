import { Component } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Blog App';
  blogs;
  number = 0;
  imageTitle = "Image Post";
  imageUrl = "https://picsum.photos/id/237/200/300";

  email = "zikero@gmail.com";


  constructor(service: BlogService) {
    this.blogs = service.getBlogPost()
  }

  onSave(){
    console.log(this.email);
  }

  onClick(event: Event) {
    event.stopPropagation();
    console.log('Button Clicked', event);
    this.number++;
  }

  onDivClicked() {
    console.log('Div clicked');
  }

  div2Clicked() {
    console.log('Div 2 clicked');
  }
}


