## ELR Vue Test Helpers

#### A small library of test methods to speed up Vue component testing

[![Build Status](https://travis-ci.com/Beth3346/vue-jest-helpers.svg?branch=master)](https://travis-ci.com/Beth3346/vue-jest-helpers)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/dm/elr-vue-jest-helpers.svg?style=flat)]()

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
- doesNotContain
- matches
- see
- html
- hasStyle
- isHidden
- isValidInput
- isInvalidInput
- hasCount
- hasClass
- notToHaveClass
- isDisabled
- isNotDisabled
- text
