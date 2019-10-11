// // console.log("Hello from index");
//
// const Person = require('./person');
//
// const person1 = new Person('Johnny', 35);
//
// person1.greeting();

// Importing emitter class
const Logger = require('./logger');

// Instantiating emitter object
const logger = new Logger();

// Adding listener to emitter
logger.on(
    'message',
    data => {
        console.log('Called Listener', data)
    }
);

// Using method 'log' of 'logger' that emits event
logger.log('Hello world!');
logger.log('Hello you!');
logger.log('Hello me!');

/* returns:
Called Listener { id: 'd94a398e-1daf-4236-91ea-40e08a424181', msg: 'Hello world!' }
Called Listener { id: '6aab4b39-3d25-4806-b4c6-2f80a306c2eb', msg: 'Hello you!' }
Called Listener { id: 'b72316e0-5b09-4938-ab0d-be90d2868ac2', msg: 'Hello me!' }
 */