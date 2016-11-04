# kd-angular2-projectstructure

This project will show some basic instructions to get a simple angular application up and running.
The following points will be looked upon in the presentation.

We will be creating the shell for small **TODO** application from scratch with the help of the Angular-CLI 

## What we are going to do:

1. Use todo-detail component

### Extra

1. Run Tests with/without watches
0. Build Project for production 
    * Commands

## What is finished:

1. Look up Angular-CLI [(on the webs)](https://github.com/angular/angular-cli) and install it
    * Use npm to install the Angular-CLI 
    ```
    npm install -g angular-cli
    ```
1. Initialize a project with Angular-CLI
    * Use Angular-CLI in command line (4 real)
    ```
    ng new todo_application 

    // for presentation purpose 
    ng new todo_application --skip-npm
    ``` 
1. Start a webserver
    * Run command
    ```
    ng serve
    ```
    * Open browser on URL
    [http://localhost:4200/](http://localhost:4200/)
1. Create a **todo-list** component with Angular-CLI
    * Run command
    ```
    ng g component todo-list
    ```
1. Use component to display data
    * Add component to the AppModule
    ```javascript
    import { TodoListComponent } from './todo-list/todo-list.component';
    
    ...

    declarations: [
        AppComponent,
        TodoListComponent
    ]
    ```
    * Add component to html
    ```html
    <app-todo-list></app-todo-list>
    ```
    * Add some data in the component
    * Bind to data in component html
    ```html
    <div *ngFor="let todo of todos">
        {{todo}}
    </div>
    ```
    * Create service with Angular-CLI
    ```
    ng g service services/todo-retrieval
    ```
    * Run unit tests with Angular-CLI
    ```
    ng test
    ```
    * Fix the tests!!!
1. Use service in component
    * Add provider to the AppModule
    ```javascript
    import { TodoRetrievalService } from './services/todo-retrieval.service';
    
    ...

    providers: [
        TodoRetrievalService
    ]
    ```
    * Implement service
    * Inject service to component
    ```javascript
    constructor(private todoRetrievalService: TodoRetrievalService) {
    }
    ```
    * Use data in component
1. Create a **todo-detail** component in a second project
    * Switch to [kd-angular2-components](https://github.com/mnieratschker/kd-angular2-components)
1. Get components from external project
    * Add component destination to package.json
    ```
    "kd-angular2-components": "mnieratschker/kd-angular2-components"
    ```
