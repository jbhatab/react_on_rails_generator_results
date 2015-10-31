// Expose your exported Redux app to `window` so that you can reference that name in
// your Rails view.
import HelloWorldClientEntryComponent from './HelloWorldClientEntryComponent';

window.HelloWorldApp = HelloWorldClientEntryComponent;
