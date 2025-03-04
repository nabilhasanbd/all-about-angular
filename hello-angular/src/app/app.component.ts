import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Blog App';
  blogs = ['Blog 1', 'Blog 2', 'Blog 3'];
  number = 0;

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


