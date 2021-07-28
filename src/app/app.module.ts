import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { AddComponent } from './components/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './components/update/update.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { TabsComponent } from './components/tabs/tabs.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent,
    HeaderComponent,
    AddComponent,
    UpdateComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
