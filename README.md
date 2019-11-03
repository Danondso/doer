# Doer

Todo-list application written in angular.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Setting up environment

You'll need some things running in order to use the application:

- [Doer back-end](https://github.com/Danondso/react-todo-backend)
- [Okta Dev Account](https://developer.okta.com/signup/)
- Okta SPA app clientID
- Okta Authorization server with scopes configured (see example config setup)

Base Config Example Setup:

```typescript

export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:3000/api/v1', //doer backend base url
  issuer: '', //okta issuer url
  redirectUri: window.location.origin,
  clientId: '', //okta SPA client id
  responseType: 'access_token',
  showDebugInformation: true,
  idpBaseUrl: '', //okta authorization server base url
  tokenRedirectUri: 'http://localhost:4200/tasks', //token redirect url
  scopes: [ // doer backend scopes needed
    'tasks:update',
    'tasks:create',
    'tasks:delete',
    'tasks:read',
    'openid',
    'email'
  ],
  signUpToggle: false, //okta dev accounts don't allow for custom signup screens, so the signup tab is disabled. 
};

```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
