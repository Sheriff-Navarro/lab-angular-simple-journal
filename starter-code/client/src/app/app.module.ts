import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import {JrnlentryService} from './jrnlentry.service';
import {routes} from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JrnlentryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
