import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'This is delicious',
      'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 40)]
    ),
    new Recipe(
      'Burger',
      'This is also delicous',
      'https://upload.wikimedia.org/wikipedia/commons/4/47/Hamburger_%28black_bg%29.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}