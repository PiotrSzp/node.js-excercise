// The url module provides utilities for URL resolution and parsing.

const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active'); // after '?' are parameters

// Serialized URL
console.log(myUrl.href);
/*
http://mywebsite.com:8000/hello.html?id=100&status=active
 */
console.log(myUrl.toString());
/*
http://mywebsite.com:8000/hello.html?id=100&status=active
 */


// Host (root domain, with port)
console.log(myUrl.host);
/*
mywebsite.com:8000
 */


// Host (root domain, no port)
console.log(myUrl.hostname);
/*
mywebsite.com
 */


// Path (file name with slash)
console.log(myUrl.pathname);
/*
/hello.html
 */


// Serialized query
console.log(myUrl.search);
/*
?id=100&status=active
 */


// Query params obj
console.log(myUrl.searchParams);
/*
URLSearchParams { 'id' => '100', 'status' => 'active' }
 */


// Add query params
myUrl.searchParams.append('123','abc');
console.log(myUrl.searchParams);
/*
URLSearchParams { 'id' => '100', 'status' => 'active', '123' => 'abc' }
 */
console.log(myUrl.href);
/*
http://mywebsite.com:8000/hello.html?id=100&status=active&123=abc
 */


// Loop through params
myUrl.searchParams.forEach(( value, name) => {
   console.log(`${name}: ${value}`);
});
/*
id: 100
status: active
123: abc
 */

