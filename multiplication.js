var array = [1,2,3,4,5,6,7,8,9,10,11,12];
var object = {}

for (var i = 0; i < 12; i++){
    object[array[i].toString()]=[]   
    for (var l = 0; l < 12; l++){
object[array[i].toString()]=[
...object[array[i]],
    array[i] * array[l]

]
    }
}
console.log(object)