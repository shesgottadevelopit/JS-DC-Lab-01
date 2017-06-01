var prompt = require('prompt');


// opton 1
// //
// // Start the prompt
// //
// prompt.start();
//
// //
// // Get two properties from the user: username and email
// //
// prompt.get(['username', 'email'], function (err, result) {
//   //
//   // Log the results.
//   //
//   console.log('Command-line input received:');
//   console.log('  username: ' + result.username);
//   console.log('  email: ' + result.email);
// });

// another option

prompt.start();

var property = {
  name: 'yesno',
  message: 'are you sure?',
  validator: /y[es]*|n[o]?/,
  warning: 'Must respond yes or no',
  default: 'no'
};

//
// Get the simple yes or no property
//
prompt.get(property, function (err, result) {
  //
  // Log the results.
  //
  console.log('Command-line input received:');
  console.log('  result: ' + result.yesno);
});
