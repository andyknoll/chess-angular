import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { Topic1 }  from './topic1/topic1.component';
import { Topic2 }  from './topic2/topic2.component';
import { Topic3 }  from './topic3/topic3.component';
import { Topic4a } from './topic4/topic4a.component';
import { Topic4b } from './topic4/topic4b.component';
import { Topic4c } from './topic4/topic4c.component';
import { Topic4d } from './topic4/topic4d.component';
import { Topic4e } from './topic4/topic4e.component';
import { Topic4f } from './topic4/topic4f.component';
import { Topic5 }  from './topic5/topic5.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [],
  declarations: [
    AppComponent,
    Topic1,
    Topic2,
    Topic3,
    Topic4a,
    Topic4b,
    Topic4c,
    Topic4d,
    Topic4e,
    Topic4f,
    Topic5
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
