import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ConchaComponent } from './pija/concha/concha.component';
import { SucioComponent } from './culo/sucio/sucio.component';
import { LimpioComponent } from './culo/limpio/limpio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConchaComponent,
    SucioComponent,
    LimpioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
