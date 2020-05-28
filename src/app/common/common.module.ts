import { NgModule } from '@angular/core';
import { IdeaModule } from '../idea/idea.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
    declarations: [
      WelcomeComponent,
    ],
    imports: [
      IdeaModule
    ],
    exports: [
      WelcomeComponent
    ]
  })
  export class CommonModule { }