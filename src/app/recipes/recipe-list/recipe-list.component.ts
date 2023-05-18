import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'This is a test', "https://images.immediate.co.uk/production/volatile/sites/30/2023/04/Trifle-bowl-coronation-salad-0ad63bf.jpg?quality=90&resize=556,505" ),
  new Recipe('A Test Recipe', 'This is a test', "https://images.immediate.co.uk/production/volatile/sites/30/2023/04/Trifle-bowl-coronation-salad-0ad63bf.jpg?quality=90&resize=556,505" ),
]
}
