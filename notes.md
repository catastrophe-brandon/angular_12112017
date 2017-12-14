# Forms Notes

## Form Input Fields

- pristine/dirty
- blur event - field lost focus
- ng-valid/invalid - Data in the field is either valid or invalid based upon assigned validators.
- touched - indicates the field has not been modified since form was loaded. Not the same as valid/invalid.

Some of these can be tracked on groups of controls.

Generally better to use CSS to control what should be displayed in terms of error msgs.


## Accessing an object from a template
Protip: Use @ViewChild
If you just need to know the properties of ngModel you could review the
documentation for Angular.

## Template vs Reactive

Reactive forms - manage controls and everything in the code.
Template Forms - emphasis on managing things in the HTML template.
