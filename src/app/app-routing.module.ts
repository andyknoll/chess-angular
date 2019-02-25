import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components to fill <router-outlet> tag
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

// array of routes
const routes: Routes = [
    { path: '',       component: Topic1 },      // empty route

    { path: 'topic1', component: Topic1 },      // Intro page
    { path: 'topic2', component: Topic2 },
    { path: 'topic3', component: Topic3 },

    { path: 'topic4a', component: Topic4a },
    { path: 'topic4b', component: Topic4b },
    { path: 'topic4c', component: Topic4c },
    { path: 'topic4d', component: Topic4d },
    { path: 'topic4e', component: Topic4e },
    { path: 'topic4f', component: Topic4f },
    
    { path: 'topic5', component: Topic5 }       // About page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
