import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoAppComponent } from './home/todo-app/todo-app.component';
import { TodoItemComponent } from './home/todo-item/todo-item.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GuideComponent } from './guide/guide.component';

import { routeConfig } from './app.routes';

import { TodoService } from './service/todo.service';
import { PeopleService } from './service/people.service';

import { PersonResolver } from './person.resolve';
import { TodoResolver } from './todo.resolve';
import { Pipe1Pipe } from './pipe/pipe1.pipe';
import { Pipe2Pipe } from './pipe/pipe2.pipe';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    TodoItemComponent,
    PeopleComponent,
    PersonComponent,
    HomeComponent,
    DetailComponent,
    AboutUsComponent,
    GuideComponent,
    Pipe1Pipe,
    Pipe2Pipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig, {
      useHash: false,
      enableTracing: false
    }),
  ],
  providers: [TodoService, PeopleService, PersonResolver, TodoResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
