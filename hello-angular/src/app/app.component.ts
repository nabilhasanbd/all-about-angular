import { Component } from '@angular/core';
import { BlogService } from './blog.service';


interface IUser {
  Name: string;
  Age: number;
  Image: string;
  Email: string;
  Active: boolean;
}

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

  email = "mojatoja@gmail.com";


  constructor(service: BlogService) {
    this.blogs = service.getBlogPost()
    console.log(this.users);

  }
  
  users: IUser[] = [
    {
      Name: 'Jhon Doe',
      Age: 25,
      Image: 'https://cdn-icons-png.flaticon.com/512/219/219970.png',
      Email: 'jhon.doe@yopmail.com',
      Active: true
    },
    {
      Name: 'Bob Smith',
      Age: 25,
      Image: 'https://cdn-icons-png.flaticon.com/512/219/219988.png',
      Email: 'bob.smith@yopmail.com',
      Active: false
    },
    {
      Name: 'Alison Cris',
      Age: 20,
      Image: 'http://www.canada-work.com/_rsrc/1531284300421/assistants/female_generic_profile.png',
      Email: 'al.cr@yopmail.com',
      Active: true
    }
  ];
  
  

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


