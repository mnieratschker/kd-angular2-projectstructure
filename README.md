# kd-angular2-projectstructure

This project will show some basic instructions to get a simple angular application up and running.
The following points will be looked upon in the presentation.

We will be creating the shell for small **TODO** application from scratch with the help of the Angular-CLI 

## What we are going to do:

1. Use component to display data
    * Maybe a second component or a service or something? No Problem!
    * Also run unit tests!!
2. Use service in component
    * Short detour into how to use dependency injection
    * Create data in service 
3. Create a **todo-detail** component in a second project
    * Switch to [kd-angular2-components](https://github.com/mnieratschker/kd-angular2-components)
4. Get components from external project
5. Use todo-detail component

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