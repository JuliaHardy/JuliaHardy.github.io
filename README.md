# CountdownApp

Simple app to schedule event to see time remaining until the start of the event.

#### Functionality & Features:
1. select name and date to display event. Both fields are required, Submit by pressing enter or moving mouse from input.
2. event data is stored between reloads.
3. event details are displayed as full width, one line text, resizable for different screen orientation and sizes. This solution is reusable by using custom directive `appMaxWidth` on div element with child paragraph including text to display.
4. app consist unit tests in `jest` to ensure that there are no errors in the delivered functionalities. 
### How to setup project:

- Run `yarn` to install dependencies.
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
- Run `ng test` to run unit tests.

### What can be improved:
- better form validation: limits for event name (I already implemented date selection limit for only future dates).
- submit button and clear form after submit.
- include also text height in full width solution to fit content in whole page without scroll (particular devices)


