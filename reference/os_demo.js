// OS - Operating System
//The os module provides a number of operating system-related utility methods.

const os = require('os');

// Platform
console.log(os.platform());
/*
returns linux
 */

// CPU Architecture
console.log(os.arch());
/* returns
x64
 */

// CPU core info
// console.log(os.cpus());
/* returns arr of objects containing CPU state and params (each core):
[
  {
    model: 'Intel(R) Core(TM) i7-2630QM CPU @ 2.00GHz',
    speed: 1916,
    times: {
      user: 25046000,
      nice: 36200,
      sys: 4638800,
      idle: 539090400,
      irq: 0
    }
  },
  {
    model: 'Intel(R) Core(TM) i7-2630QM CPU @ 2.00GHz',
    speed: 1647,
    times: {
      user: 25169600,
      nice: 15800,
      sys: 4663600,
      idle: 100584500,
      irq: 0
    }
  },
  {
    model: 'Intel(R) Core(TM) i7-2630QM CPU @ 2.00GHz',
    speed: 1791,
    times: {
      user: 25201200,
      nice: 146200,
      sys: 4589400,
      idle: 100674500,
      irq: 0
    }
  },
  {
    model: 'Intel(R) Core(TM) i7-2630QM CPU @ 2.00GHz',
    speed: 1622,
    times: {
      user: 25408600,
      nice: 62600,
      sys: 5095600,
      idle: 98596900,
      irq: 0
    }
  },
  {
    model: 'Intel(R) Core(TM) i7-2630QM CPU @ 2.00GHz',
    speed: 1760,
    times: {
      user: 25231800,
      nice: 7600,
      sys: 4574200,
      idle: 100398400,
      irq: 0
    }
  },
  {
    model: 'Intel(R) Core(TM) i7-2630QM CPU @ 2.00GHz',
    speed: 1626,
    times: {
      user: 24887800,
      nice: 111600,
      sys: 4579400,
      idle: 100731400,
      irq: 0
    }
  },
  {
    model: 'Intel(R) Core(TM) i7-2630QM CPU @ 2.00GHz',
    speed: 1651,
    times: {
      user: 24695700,
      nice: 19700,
      sys: 4588000,
      idle: 100120600,
      irq: 0
    }
  },
  {
    model: 'Intel(R) Core(TM) i7-2630QM CPU @ 2.00GHz',
    speed: 1825,
    times: {
      user: 24428400,
      nice: 33600,
      sys: 5561700,
      idle: 100733800,
      irq: 0
    }
  }
]

 */

// Free / Total memory
console.log(os.freemem());
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Up time (how long system up, seconds)
console.log(os.uptime());