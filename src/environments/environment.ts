// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCWyJw0EDbpVe9F0mhs6SxhJU8GhGoVIbU',
    authDomain: 'awesome-dummy.firebaseapp.com',
    databaseURL: 'https://awesome-dummy.firebaseio.com',
    projectId: 'awesome-dummy',
    storageBucket: 'awesome-dummy.appspot.com',
    messagingSenderId: '607986480400'
  }
};
// firebase REST API:
// https://firestore.googleapis.com/v1beta1/projects/awesome-dummy/databases/(default)/documents/COLLECTIONS/ID

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
