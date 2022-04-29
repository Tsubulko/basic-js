const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) 
{
  var newArr = []; 
  if (Array.isArray(arr) === false )
  { 
    throw Error ("'arr' parameter must be an instance of the Array!"); 
  }
  let marker = 1; 
  let prevElement = undefined; 
  for(let i = 0; i < arr.length; i++) 
  { 
    if (arr[i] === '--discard-next') 
    { 
      marker = 0; 
    }
    else if(arr[i] === '--discard-prev') 
    { 
      if (typeof prevElement !== "undefined") 
      { 
        newArr.pop(); 
      } 
    }
    else if(arr[i] === '--double-next') 
    { 
      marker = 2; 
    }
    else if(arr[i] === '--double-prev') 
    { 
      if((newArr.length > 0) && (typeof prevElement !== "undefined")) 
      { 
        newArr.push(newArr[newArr.length - 1]); 
      } 
    }
    else 
    { 
      if(marker > 0) 
      { 
        newArr.push(arr[i]); 
        if (marker > 1)
        { 
          newArr.push(arr[i]); 
        } 
        prevElement = arr[i]; 
      } 
      else 
      { 
        prevElement = undefined; 
      } 
      marker = 1; 
    } 
  } 
  return newArr; 
}

module.exports = {
  transform
};
