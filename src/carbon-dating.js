const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(strAge) {
  let k = 0.693 / HALF_LIFE_PERIOD;
  let fls = Number(strAge);
  if(typeof(strAge) === typeof('string'))
  {
    if(fls === Number(fls) && fls > 0 && fls <= 15 && (strAge.match(/^[0-9]+$/) || strAge.match(/^[0-9]+\.?[0-9]+$/)))
    {
      return  (-1) * Math.ceil(Math.log(fls / MODERN_ACTIVITY) / k) + 1;
    }
    else return false;
  }
  else return false;
}

module.exports = {
  dateSample
};
