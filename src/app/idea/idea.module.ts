import { NgModule } from '@angular/core';
import { IdeaCarouselComponent } from './carousel/carousel.component';

@NgModule({
    declarations: [
      IdeaCarouselComponent,
    ],
    exports: [
      IdeaCarouselComponent
    ]
  })
  export class IdeaModule { }