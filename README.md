## ELR Vue Test Helpers

#### A small library of test methods to speed up Vue component testing

[![Build Status](https://travis-ci.com/Beth3346/vue-jest-helpers.svg?branch=master)](https://travis-ci.com/Beth3346/vue-jest-helpers)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/dm/elr-vue-jest-helpers.svg?style=flat)]() [![Greenkeeper badge](https://badges.greenkeeper.io/Beth3346/vue-jest-helpers.svg)](https://greenkeeper.io/)

For use with VueTestUtils and Jest

`npm install elr-vue-jest-helpers --save-dev`

or

`yarn add elr-vue-jest-helpers -D`

    import helpers from 'elr-vue-jest-helpers';

Initialize the helpers library after you mount your wrapper component
pass in the Vue component instance
pass in the expect method from Jest
all methods are chainable

    h.init({wrapper, expect});

\*\*\* if you mount your component again you must reinitialize the test utilities so they can interact with your new wrapper.

### Methods

- select
  - select an option in a select form field

```javascript
h.select('California', '#states');
```

- type
  - type some input into a form field
- blur
  - trigger blur event on form field
- submit
  - trigger a submit event on a form field
- clear
  - clear value from form field
- click
  - trigger a click event
- emit
  - test that an event is emitted
- doesNotEmit
  - test that an event is not emmitted
- payloadEquals
  - check the content of an event payload
- contains
  - wrapper contains selector
- doesNotContain
  - wrapper does not contain selector
- matches
  - wrapper or selector html matches snapshot
- see
  - text is visible inside wrapper or provided selector
- html
  - wrapper or selector contains html
- hasStyle
  - style attribute or wrapper or selector matches provided style object
- isHidden
  - selector or wrapper is set to `display: none`
- isValidInput
  - checks if error message is not present
- isInvalidInput
  - checks if error message is present
- hasCount
  - checks that number of selectors matches expected count
- hasClass
  - checks that wrapper or selector has the expected class
- notToHaveClass
  - checks that wrapper or selector does not have the expected class
- isDisabled
  - checks that element has the disabled attribute
- isNotDisabled
  - checks that element does does not have the disabled attribute
- text
  - checks that wrapper or selector text matches provided text
  - will check the entire string
