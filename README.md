# notes-2-google-doc
Notes to Google Docs

Built using Typescript + Express + Petite Vue + Firebase + Google Vision API.

## Run project
From the terminal or command line, launch the application.


``npm run start`` 


The TypeScript compiler does the work of generating the JavaScript files and copies them to the dist folder. 

## Includes tslint library 
Instructs TypeScript how to lint your code, to alert you to potential problems in your code beyond syntax issues.


Use ``npm run build`` to start TSLint and Typescript compiler without starting Node.js server.


## Petite-Vue library
https://github.com/vuejs/petite-vue

```
petite-vue is an alternative distribution of Vue optimized for progressive enhancement. It provides the same template syntax and reactivity mental model with standard Vue. However, it is specifically optimized for "sprinkling" small amount of interactions on an existing HTML page rendered by a server framework
Petite-vue can be used without a build step. It can be loaded it from a CDN.
```
- Petite vue team

## Use Firebase for database and User authentication if needed
### Using firebase-CLI to make things easier

https://firebase.google.com/docs/cli#setup_update_cli

Install firebase-cli globally. 


``npm install -g firebase-tools``

- Log into Firebase using your Google account by running the following command:


``firebase login``


``firebase projects:list``

Run the following command to initialize Firebase functions:


``firebase init functions``



