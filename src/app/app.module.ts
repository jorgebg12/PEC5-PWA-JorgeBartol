import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentDetailComponent } from './components/component-detail/component-detail.component';
import { ComponentListComponent } from './components/component-list/component-list.component';
import { CardComponent } from './shared/components/card/card.component';
import { GridComponent } from './shared/components/grid/grid.component';
import { ServiceWorkerModule } from '@angular/service-worker';
@NgModule({
  declarations: [
    AppComponent,
    ComponentListComponent,
    ComponentDetailComponent,
    CardComponent,
    GridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
