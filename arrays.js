var chocolateBars = ['snickers', 'hundred grand','kitkat', 'skittles'];
function addElementToBeginningOfArray(array,element){
 var newArray = [element, array[0]]
  return newArray
}
function destructivelyAddElementToBeginningOfArray(array,element){
  
  array.unshift(element);
  return array;
}
function addElementToEndOfArray(array,element){
   return [...array,element];
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}
function accessElementInArray(array,index){
  return array[index];
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromBeginningOfArray(array){
     array.shift();
     return array;

}
function destructivelyRemoveElementFromEndOfArray(array){
     array.pop();
     return array;

}
function removeElementFromEndOfArray(array){
   var newArray = array.slice(0, array.length - 1);
  return newArray
}




