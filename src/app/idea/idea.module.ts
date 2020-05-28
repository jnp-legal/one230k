import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeaListComponent } from './idea-list/idea-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IdeaListComponent,
  ],
  exports: [
    IdeaListComponent
  ]
})
export class IdeaModule { }