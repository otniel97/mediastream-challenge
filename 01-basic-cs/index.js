'use strict';

console.log(`
1.
---

There is database of users and their hats at './database.json'.
Find the total sum of the top-3 most selling hats.
We don't care which hats are.
You can use lodash/underscore (recommended)

What is the complexity in O() notation of time and space?
O(n) pues en el caso de buscar la información se recorre todo el arreglo de datos, es decir, la totalidad de registros (n), para obtener información completa.
En cuanto al tiempo se utiliza la funcion console.time obteniendo un tiempo de respuesta promedio de 5.5ms. Sin embargo, es relativo, influye la capacidad de hardware del servidor.

IMPORTANT: Find a balance between performance and legibility (more important).

---
Example:
Imagine the following (taken from the real database):

Hat(7adbc650-2a5e-4e59-b88f-97377e0b7e34) sold 7.
Hat(872f5fc4-515f-416d-9ec6-3488da2bd74a) sold 6.
Hat(048d8fbf-7653-461f-a59c-68c73b8855e5) sold 7.
Hat(32266d28-5092-4a69-afb3-90fafd46e04a) sold 9.

-> Expected result: 7 + 7 + 9 => 23
`);

const _ = require('lodash'); // https://lodash.com/docs/4.17.4
const assert = require('assert');

//Inicio de tiempo de ejecución
console.time('Process');

const database = require('./database.json');

const sellingHats = _.flatMap(database, ({ hats }) =>
    _.map(hats, hat => ({...hat }))
);

const count = _(_.countBy(sellingHats, 'id')).sortBy().value();

const total = count.slice(count.length - 3).reduce((a, b) => a + b) // TODO

// Throws error on failure
assert.equal(total, 23, `Invalid result: ${total} != 23`);

console.log('Success!');

console.timeEnd('Process');