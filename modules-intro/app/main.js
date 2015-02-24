import {foo, bar} from './one';

console.log('Imported from one', foo, bar);

// notice the lack of {} when getting the
// default export
import hey from './two';
console.log('Imported from two', hey);

// a thing can export a default and named
// exports, and you can import both
import hello from './three';
import { goodbye } from './three';

console.log('Imported from three', hello, goodbye);

import Person from './four';

console.log('Imported from four', Person);
