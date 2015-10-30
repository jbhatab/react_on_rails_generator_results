// Expose your exported Redux app to `window` so that you can reference that name in
// your Rails view.
import HelloWorldClientApp from './HelloWorldClientApp';

window.HelloWorldApp = HelloWorldClientApp;
