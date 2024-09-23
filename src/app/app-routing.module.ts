import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProductsServicesComponent } from './products-services/products-services.component';

import { MirrorComponent } from './mirror/mirror.component';
import { AirFreshenerComponent } from './air-freshener/air-freshener.component';
import { ArtificialPlantsComponent } from './artificial-plants/artificial-plants.component';
import { CandlesComponent } from './candles/candles.component';
import { CarpetsMatsComponent } from './carpets-mats/carpets-mats.component';
import { ColorfulglasswareComponent } from './colorfulglassware/colorfulglassware.component';
import { CurtainsholderComponent } from './curtainsholder/curtainsholder.component';
import { DecorPiecesComponent } from './decor-pieces/decor-pieces.component';
import { DecorativePillowsComponent } from './decorative-pillows/decorative-pillows.component';
import { GlassmarblesComponent } from './glassmarbles/glassmarbles.component';
import { LightingComponent } from './lighting/lighting.component';
import { PhotoFramesComponent } from './photo-frames/photo-frames.component';
import { ShowpiecesComponent } from './showpieces/showpieces.component';
import { VasesComponent } from './vases/vases.component';
import { WallArtComponent } from './wall-art/wall-art.component';
import { WallpapersComponent } from './wallpapers/wallpapers.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contactus',
    component: ContactUsComponent,
  },
  
  {
    path: 'about',
    component: AboutUSComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'productsservices',
    component: ProductsServicesComponent,
  },
  {
    path: 'mirror',
    component: MirrorComponent,
  },
  {
    path: 'airfreshener',
    component: AirFreshenerComponent,
  },
  {
    path: 'artificialplants',
    component: ArtificialPlantsComponent,
  },
  {
    path: 'candles',
    component: CandlesComponent,
  },
  {
    path: 'carpets',
    component: CarpetsMatsComponent,
  },
  {
    path: 'colorful',
    component: ColorfulglasswareComponent,
  },
  {
    path: 'curtainholder',
    component: CurtainsholderComponent,
  },
  {
    path: 'decorpieces',
    component: DecorPiecesComponent,
  },
  {
    path: 'pillows',
    component: DecorativePillowsComponent,
  },
  {
    path: 'marbles',
    component: GlassmarblesComponent,
  },
  {
    path: 'lighting',
    component: LightingComponent,
  },
  {
    path: 'photoframes',
    component: PhotoFramesComponent,
  },
  {
    path: 'showpieces',
    component: ShowpiecesComponent,
  },
  {
    path: 'vases',
    component: VasesComponent,
  },
  {
    path: 'wallart',
    component: WallArtComponent,
  },
  {
    path: 'wallpapers',
    component: WallpapersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
