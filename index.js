console.log('Hello world');

const { readFile, readFileSync } = require('fs');

const txt = readFileSync('./hello.txt', 'utf8');
console.log(txt);

const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {
    console.log('yum')
})

eventEmitter.emit('lunch');
eventEmitter.emit('lunch');

