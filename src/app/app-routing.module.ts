import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
const routes: Routes = [
  {
    path:'',
    component:TutorialComponent,
    children:[
      {
        path:'',
        component:ContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
