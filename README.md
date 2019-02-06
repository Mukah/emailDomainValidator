# emailDomainValidator.jquery.js
Library to validate email domain in client-side email fields with jQuery

## Parameters
```javascript
$(element).emailDomainValidator(
  [ 'gmail.com', 'hotmail.com' ], // Domain list array,
  true, // Allow or deny these domains,
  function() { console.log('ok'); } // Success callback
  function() { console.log('fail'); } // Fail callback
);
```

## Usage
```javascript
jQuery(function($) {
  $('.email-validator').emailDomainValidator([
    'gmail.com'
  ], true, function() {
    console.log('success');
  }, function() {
    console.log('failed');
  });
});
```

## Codepen
https://codepen.io/samuel-surfe/pen/GzMzGR
