import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { TutorialItemComponent } from './components/tutorial-item/tutorial-item.component';
import { HeaderComponent } from './components/header/header.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducer/student.reducer';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffect } from './store/effects/student.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ContactComponent } from './components/contact/contact.component'; // Angular CLI environment


@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    TutorialItemComponent,
    HeaderComponent,
    AddStudentComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      student:reducer
    }),
    EffectsModule.forRoot([StudentEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
