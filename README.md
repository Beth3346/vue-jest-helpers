## ELR Vue Test Helpers
#### A small library of test methods to speed up Vue component testing
For use with VueTestUtils and Jest

`npm install elr-vue-jest-helpers --save-dev`

or

`yarn add elr-vue-jest-helpers -D`

    import helpers from 'elr-vue-jest-helpers';

Initialize the helpers library in your beforeEach
  pass in the Vue component instance
  pass in the expect method from Jest

    h.init(wrapper, expect);

### Methods

* Select
* Type
* Blur
* Submit
* Clear
* Click
* Emit
* DoesNotEmit
* PayloadEquals
* Contains
* DoesNotContain
* Matches
* See
* Html
* HasStyle
* IsHidden
* IsValidInput
* IsInvalidInput
* HasCount
