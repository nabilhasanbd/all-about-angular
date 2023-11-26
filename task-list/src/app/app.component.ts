import { Component } from '@angular/core';
import { WishItem } from '../shared/models/WishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  items: WishItem[] = [
    new WishItem('To learn angular'),
    new WishItem('Get coffee', true),
    new WishItem('Find grass that cut itself')

  ];
  title = 'My Wish-List';

  newWishText = "";

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = "";

  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}