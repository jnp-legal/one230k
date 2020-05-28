import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { IdeaModule } from '../idea/idea.module';
import { IdeaListComponent } from '../idea/idea-list/idea-list.component';


@NgModule({
    declarations: [
      WelcomeComponent,
    ],
    imports: [
      IdeaModule
    ]
  })
  export class CompositModule { }