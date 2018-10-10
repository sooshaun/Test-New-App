import te from 'ava';  // this is to connect the function / dependencies called ava
import rever from '../src/index.js';  // this is to connect the function / dependencies refer to the whole file

// and then denote the above function by assigning a name, like alegbra to be used of the below.
te(t => {
  t.is(rever('olleh'), 'hello', 'This strings do not match'),
    t.is(rever('eybdoog'), 'goodbye')
})


