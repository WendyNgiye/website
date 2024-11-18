import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MirrorComponent } from './mirror/mirror.component';
import { CarpetsMatsComponent } from './carpets-mats/carpets-mats.component';
import { VasesComponent } from './vases/vases.component';
import { WallArtComponent } from './wall-art/wall-art.component';
import { DecorPiecesComponent } from './decor-pieces/decor-pieces.component';
import { LightingComponent } from './lighting/lighting.component';
import { ArtificialPlantsComponent } from './artificial-plants/artificial-plants.component';
import { CandlesComponent } from './candles/candles.component';
import { DecorativePillowsComponent } from './decorative-pillows/decorative-pillows.component';
import { AirFreshenerComponent } from './air-freshener/air-freshener.component';
import { ColorfulglasswareComponent } from './colorfulglassware/colorfulglassware.component';
import { CurtainsholderComponent } from './curtainsholder/curtainsholder.component';
import { WallpapersComponent } from './wallpapers/wallpapers.component';
import { GlassmarblesComponent } from './glassmarbles/glassmarbles.component';
import { ShowpiecesComponent } from './showpieces/showpieces.component';
import { ProductsComponent } from './products/products.component';
import { SittingroomComponent } from './sittingroom/sittingroom.component';
import { BalconyinteriorComponent } from './balconyinterior/balconyinterior.component';
import { OutdoorinteriorComponent } from './outdoorinterior/outdoorinterior.component';
import { BedroominteriorComponent } from './bedroominterior/bedroominterior.component';
import { BathroominteriorComponent } from './bathroominterior/bathroominterior.component';
import { CommercialinteriorComponent } from './commercialinterior/commercialinterior.component';
import { KitcheninteriorComponent } from './kitcheninterior/kitcheninterior.component';
import { DininginteriorComponent } from './dininginterior/dininginterior.component';
import { ClosetinteriorComponent } from './closetinterior/closetinterior.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUSComponent, 
    ProjectsComponent,
    ContactUsComponent,
    NavBarComponent, 
    MirrorComponent,
    CarpetsMatsComponent,
    VasesComponent,
    WallArtComponent,
    DecorPiecesComponent,
    LightingComponent,
    ArtificialPlantsComponent,
    CandlesComponent,
    DecorativePillowsComponent,
    AirFreshenerComponent,
    ColorfulglasswareComponent,
    CurtainsholderComponent,
    WallpapersComponent,
    GlassmarblesComponent,
    ShowpiecesComponent,
    ProductsComponent,
    SittingroomComponent,
    BalconyinteriorComponent,
    OutdoorinteriorComponent,
    BedroominteriorComponent,
    BathroominteriorComponent,
    CommercialinteriorComponent,
    KitcheninteriorComponent,
    DininginteriorComponent,
    ClosetinteriorComponent,
    FooterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
