import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/WishItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To learn angular'),
    new WishItem('Get coffee', true),
    new WishItem('Find grass that cut itself')
 
  ];
  title = 'My Wish-List';

  newWishText = "";

  toggleItem(item : WishItem){
    item.isComplete = !item.isComplete;
    console.log(item);
  }

addNewWish(){
  this.items.push(new WishItem(this.newWishText));
  this.newWishText = "";

  }
}
