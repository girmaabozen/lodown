'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
 
 
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



/**
 * identity: return the given value of altered.
 * 
 * @param {Any Value} value: Can be any datatype
 * 
 * @return {Any Vaule}: Same value as input, unalterd
 */
function identity(value){
    return value;
}
module.exports.identity = identity;


/**typeof: takes any value and defines the data type
 * @param {array, number, boolean, undefined, string} anything: Any Value
 * @return {string}: Returns a string with the data type 

*/


function typeOf(value){
    if(Array.isArray(value)){
        return "array";
    }else if(value === null){
        return "null";
    }
    return typeof value;
 };
 module.exports.typeOf = typeOf;
 
 /**
  * first: return the nth first elements based on the argument givin to the number
  * @param{array}
  * @param{number}
  * 
  * @return {n number of elements in an array}
 */
 function first(array, number){
   let small = [];
    if (isNaN(number)){
        return array[0];
    } else if (number > array.length){
        return array;
    } else if (number < 0 || !Array.isArray(array)){
        return [];
    } 
    for (var i = 0; i < number; i++){
        small.push(array[i]);
    } return small;
        };
        module.exports.first = first;
            
    /**
     * last: returns the last nth elements of an array, based on the
     * argument givin to the number 
     * @param {array}
     * @param {number}
     * 
     * @return {it returns n number of elements in an array}
     */
function last(array, number){
    let small = [];
    if (isNaN(number)){
        return array[array.length - 1];
    } else if (number > array.length){
        return array;
    } else if (number < 0 || !Array.isArray(array)){
        return [];
    } 
    for (var i = array.length -1; i >= array.length - number; i--){
        small.unshift(array[i]);
    } return small;
};
module.exports.last = last;

/**
 * indexOf: Returns the index number where the values argument first appears 
 * in the array. If the value does not exist in the array, -1 is returned.
 * @param {array} array 
 * @param {any value} value: (can be any data type) 
 * 
 * @return {returns a NUMBER! Either the index position, or -1 if the value
 * is nt in the array} -1 : (since the value is not in the array)
*/
function indexOf(array, value){
    console.log(array, value, "*****");
// find the first the first occurence in the arrays ellement 
for(var i = 0; i < array.length; i++){
    if(array[i] === value){
        return i;
    }
}
return -1;
};
module.exports.indexOf = indexOf;


/**
 * contains: cycles through an array to see if it contains a value
 * @param{array} 
 * @param{any value} value: can be any data type
 * 
 * @return{a boolean value if the argument is in the array} 
 * 
 */
 

function contains(array, value){
    for(var i = 0; i < array.length; i++){
        if(array[i] === value){
            return true;
        }
    }
    return false;
};
module.exports.contains = contains;


/**
 * each: loops over a collection and a function is called for each element
 * or property
 * @param{Array or Object} collection
 * @parmam{Function} action
 * 
 * @return{returns NOTHING!}
*/

_.each = function(collection, action){
    if(Array.isArray(collection)){
        for(var i = 0; i < collection.length; i++){
            action(collection[i], i, collection);
        }
    }
    else {
         for (var key in collection) {
                action(collection[key], key, collection)

        }
    }
}
module.exports.each = each;


/**
 * unique: loops through the array and removes any duplicate values
 * @param{array}
 * 
 * @return{an array without duplicate values} 
*/
function unique(array){
    var result = [];
    for(let i = 0; i < array.length; i++){
      console.log(array[i]);
        if(result.indexOf(array[i]) === -1){
            result.push(array[i]);
        }
    }
    return result;
};
module.exports.unique = unique;


/**
 * filter: loops through and array and test each element to the
 * callback function (action). If it does pass the callback function test,
 * then return a new array with the elements that pass the callback function.
 * @param{Array} array 
 * 
 * @param{Function} action
 * 
 * @return{new array}
*/
function filter(array, action){
    let result = [];
    _.each(array, function(element, i, array){//everytime u call each it produces
    //that functions elements index and arrray
        if(action(array[i], i, array) === true){
            result.push(element);
        }
    });
    return result;
};
module.exports.filter = filter;



/**
 * reject: iterates through an array and test each element to the
 * callback function (action). If it does NOT pass the callback function test
 * then return a new array with all the elments that did NOT pass
 * @param{array} array
 * @param{function} action
 * @return{array of FALSE arguments}
 * 
*/
function reject(array, action){
 return _.filter(array, function(element, i, array){
       
    return (!action(element, i, array)
        
       
  )}
   
)};
module.exports.reject = reject;

/**
 * partition: itterates through an array with a function acting on each element
 * in the array
 * @param{array}
 * @param{function} action
 * 
 * @return{returns the truthy and falsy values in two sub arrays
 * in a larger array} [subArr, falsy]
*/
function partition(array, action){
    //assign the _. function to an array 
    let subArr = _.filter(array,function(element, i, array){
        return action(element, i, array)
    })
//assing the reject filter to an array
   let falsy = _.reject(array,function(element, i, array){
       return (action(element, i, array)
   )
  
   });
   return [subArr, falsy]
}
module.exports.partition = partition;

/**
 * map: a function is called upon each element in a collection and the return 
 * value of each funciton call will be in a new array
 * @param{Array or Object} collection
 * 
 * @param{function} test 
 * 
 * @return{an array with the functioned elements} result
*/

function map(collection, test){
 var result = [];

  if(Array.isArray(collection)){
    for(var i = 0; i < collection.length; i++){
   result.push(test(collection[i], i, collection))
    }
   
  }else if(typeof collection === "object"){
      for(let key in collection){
      result.push(test(collection[key], key, collection))
      }
  }return result; // return those results outside 
};
module.exports.map = map;

/**
* pluck: cycles through an object to see if a givin property is in the objects
 * in the array and if the key exists, the values are pushed into an array.
 * @param{array with objects} array
 * @param{string} property key
 * 
 * @return{an array containing the values of the identical keys} object[property]
*/

function pluck(array, property){
    return _.map(array, function(object, index){
        return object[property]
    })
    
} 
module.exports.pluck = pluck;
/**
 * every: a function will upon each element in collection and if all of the 
 * returning values are true, true will be returned. If one of the elements
 * returns false, the entire result will now be false.
 * @param{Array or Object} collection
 * @param{function} test
 * 
 * @return{A boolean} true
*/

function every(collection, test){
if(test !== undefined) {
        //if collection is an array looop through it using a for loop
        
        if(_.typeOf(collection) === "array") {
            for(let i = 0; i < collection.length; i++) {
                if(!test(collection[i], i, collection)) {
                    return false
                } 
            } 
        } else {
            for(let key in collection) {
                if(!test(collection[key], key, collection)) {
                    return false
                }
            }
        }
    } else {
        if(_.typeOf(collection) === "array") {
            for(let i = 0; i < collection.length; i++) {
                if(!collection[i]) {
                    return false
            }}
        } else {
            for(let key in collection) {
                if(!collection[key]) {
                    return false
            }
        }
    }
} return true

};
module.exports.every = every;

/**
 * some: a function will call upon each element in the collection and if all the 
 * returning values are true, true will be returned. If even ONE of the elements
 * return true, TRUE will be returned. 
 * @param{Array or Object} collection
 * @param{function} test
 * 
 * @return{A boolean Value} false 
*/
function some(collection, test){
    if(test !== undefined) {
        if(_.typeOf(collection) === "array") {
            for(let i = 0; i < collection.length; i++) {
                if(test(collection[i], i, collection)) {
                    return true
                } 
            } 
        } else {
            for(let key in collection) {
                if(test(collection[key], key, collection)) {
                    return true
                }
            }
        }
    } else {
        if(_.typeOf(collection) === "array") {
            for(let i = 0; i < collection.length; i++) {
                if(collection[i]) {
                    return true
            }}
        } else {
            for(let key in collection) {
                if(collection[key]) {
                    return true
            }
        }
    }
} return false;

}
module.exports.some = some;

/**
 * reduce: calls a function for every element passing
 * the arguments previousResults, element, Index. And uses the return value of 
 * the function as the "previous result" for the next iteration and seed as
 * the first "previousResult". If no seed is givin the first "previous value"
 * will be the first index value of the array. After the last iteration, the 
 * return value of the final function call will be returned.
 * @param{array} array
 * @parm{function} test
 * @param{seed} seed
 * 
 * @return{a number or an array representing the final function call of the array}
*/


_.reduce = function(array, test, seed){


  for(let i = 0; i < array.length; i++){
      if(seed === undefined){
            seed = array[i];
        }else{
            seed = test(seed, array[i], i);
        }
  }
    return seed;
}
module.exports.reduce = reduce;

/**
 * extend: updates the first object's value with another object's value if they 
 * share a key. If the key does not exist in the first object, the key-value
 * pair will be added. 
 * @param{multiple objects} obj1
 * @param{multipe objects}  obj2
 * @param{multiple objects} ...obj
 * 
 * @return{an object with the updated information} result
*/
_.extend = function(obj1, obj2, ...obj){
    var result = Object.assign(obj1, obj2, ...obj);
    return result;
 }
 module.exports.extend = extend;