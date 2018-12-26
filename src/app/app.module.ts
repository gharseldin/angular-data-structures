import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { SinglyLinkedListComponent } from './components/singly-linked-list/singly-linked-list.component';
import { AbstractGraphComponent } from './components/abstract-graph/abstract-graph.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SinglyLinkedListComponent,
    AbstractGraphComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    NgxGraphModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'singlylinkedlist',
        component: SinglyLinkedListComponent
      },
      {
        path: '',
        component: MainMenuComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
