import { NgModule } from '@angular/core';

import { BioComponent } from './bio.component';
import { ArtisteComponent } from './artiste/artiste.component';
import { DiscoComponent } from './disco/disco.component';
import { LiveComponent } from './live/live.component';
import { StudioComponent } from './studio/studio.component';
import { BandComponent } from './band/band.component';
import { BioRoutingModule } from './bio-routing.module';

@NgModule({
  declarations: [
    BioComponent,
    ArtisteComponent,
    DiscoComponent,
    LiveComponent,
    StudioComponent,
    BandComponent
  ],
  imports: [
    BioRoutingModule
  ]
})

export class BioModule {}
