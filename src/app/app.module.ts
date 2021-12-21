import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './pages/content/content.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavigationItemComponent } from './components/navigation-item/navigation-item.component';
import { MdContentComponent } from './components/md-content/md-content.component';
import { GhostModule } from './plugins/ghost/ghost.module';
import { PipesModule } from './pipes/pipes.module';
import { PambungadComponent } from './pages/pambungad/pambungad.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { KomunidadComponent } from './pages/komunidad/komunidad.component';
import { EntryCardComponent } from './components/entry-card/entry-card.component';
import { ResourcesComponent } from './pages/resources/resources.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavigationComponent,
    NavigationItemComponent,
    MdContentComponent,
    PambungadComponent,
    HeaderComponent,
    FooterComponent,
    KomunidadComponent,
    EntryCardComponent,
    ResourcesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PipesModule,
    GhostModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
