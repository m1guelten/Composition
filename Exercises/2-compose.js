'use strict';

const compose = (...fns) => {
    const handlers = {};
    const comp = x => {
      if (fns.length === 0) {
        return x;
      }
      let res = x;
      try {
        for (let i = (fns.length -1); i >= 0; i--) {
          res = fns[i](res);
        }
        return res;
      } 
      catch (error) {
      handlers.error=error;
      }    
    };
    comp.on = (name) => {
      if (name === 'error'){return handlers.error};
    }
    return comp;
  };
  
module.exports = { compose };
