import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CharactersListComponent } from './characters-list/characters-list.component';

import { CharactersDetailsComponent } from './characters-details/characters-details.component';



const myComponents = [
CharactersListComponent,
CharactersDetailsComponent
];

@NgModule({
  declarations: [myComponents],
  imports: [CommonModule, RouterModule, InfiniteScrollModule],
  	exports: [myComponents],
})
export class CharactersModule { }
