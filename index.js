console.log('Hello world');

//Reading a text file and displaying output
const { readFile, readFileSync } = require('fs');

const txt = readFileSync('./hello.txt', 'utf8');
console.log(txt);

console.log('do this ASAP');

//Reading a textfile without blocking
readFile('./hello.txt', 'utf8', (err,txt) =>{ // only runs inside code once the file is read in, also captures if error occurs while reading file in
    console.log(txt);
})
console.log(txt);
console.log('do this ASAP');

//Reading files with promise based solution
const { readFiles } = require('fs').promises;

async function hello(){
    const file = await readFiles('./hello.txt', utf8);
}

//How to create an EventEmitter
const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {
    console.log('yum')
})

eventEmitter.emit('lunch');
eventEmitter.emit('lunch');

