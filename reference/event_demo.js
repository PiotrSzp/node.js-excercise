//EVENTS, EVENT EMITTERS, EVENT LISTENERS

const EventEmitter = require('events');

/*
Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.

For instance: a net.Server object emits an event each time a peer connects to it; a fs.ReadStream emits an event when the file is opened; a stream emits an event whenever data is available to be read.

All objects that emit events are instances of the EventEmitter class. These objects expose an eventEmitter.on() function that allows one or more functions to be attached to named events emitted by the object. Typically, event names are camel-cased strings but any valid JavaScript property key can be used.

When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously. Any values returned by the called listeners are ignored and will be discarded.
 */



// Create emitter class
class MyEmitter extends EventEmitter {} // empty emitter

// Init emitter object
const myEmitter = new MyEmitter();

// Create Event Lister
myEmitter.on('someEvent', () => { console.log('Event fired!!!'); });

// Emit event
myEmitter.emit('someEvent');
