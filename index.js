// Simple URL Reverser written by Wrath
// Add the URL to reverse in '' on line 6
// Then Run node . in the project directory to reverse the URL
// This script uses the long-url module on npmjs.com :)

var reverse = require('long-url');

reverse('', function(err, url) {
    if (err) {
        throw new Error(err);
    }
    console.log(url)
});