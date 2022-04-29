const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(dateArr) {
  // let result = '';
  // if(typeof(dateArr) === 'object')
  // {
  //     (dateArr.getMonth() === 11 || dateArr.getMonth() === 0 || dateArr.getMonth() === 1)?
  //       result = 'winter' :  
  //         (dateArr.getMonth() === 2 || dateArr.getMonth() === 3 || dateArr.getMonth() === 4)? 
  //           result = 'spring' : 
  //             (dateArr.getMonth() === 5 || dateArr.getMonth() === 6 || dateArr.getMonth() === 7)?
  //             result = 'summer' : result = 'autumn';
  //     return result;
  // }
  // else return Error('Invalid date!'); 
} 

module.exports = {
  getSeason
};
