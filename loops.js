function forLoop(array) { 
for(var i = 0; i < 25; i++) {
  if (i === 1) {
     array.push('I am 1 strange loop.');
 } else if (i < 25) {
    array.push('I am ' + i + ' strange loops.');
     } 
   }
   return array;
 }

 function whileLoop(n) {
 while(n > 0)
  {console.log(n--)}
  return "done";
}

function maybeTrue(){
}
function doWhileLoop(array) {
  do { array.shift();
} while (array.length > 0 && maybeTrue());
return array;
} 