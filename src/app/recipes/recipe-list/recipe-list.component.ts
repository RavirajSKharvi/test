import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('test1','testqwe1','img'),
    new Recipe('test2','testasd2','img')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
