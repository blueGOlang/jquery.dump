# jquery.dump

jQuery dump plugin. Inspect object properties in a popup window.

## Example

```javascript
$.dump(window.navigator); // any object to dump
$.dump(window.navigator, 2); // depth, default 2

$.dump($("#element"));

$("#element").dump(); // dump element selected by the jQuery selector
```
