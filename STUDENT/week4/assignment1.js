let objTargetText 
const objUL = document.querySelector('#lstItems')

objUL.onclick = function(event) {
    var source = getEventTarget(event)
    if (!objTargetText.innerHTML)
        objTargetText.innerHTML = source.innerHTML
    else
        objTargetText.innerHTML += ',' + source.innerHTML
}

function combineLists() {
var textarea1 = document.getElementById('scavenger-0').value;
  const array1 = textarea1.split(',');
 console.log(array1);

var textarea2 = document.getElementById('scavenger-1').value;
 const array2 = textarea2.split(',');
console.log(array2);

var textarea3 = document.getElementById('scavenger-2').value;
  const array3 = textarea3.split(',');
 console.log(array3);

 var textarea4 = document.getElementById('scavenger-3').value;
  const array4 = textarea4.split(',');
 console.log(array4);

 const merge = [...array1, ...array2, ...array3, ...array4];
 console.log(merge);

 merge.sort();
 console.log(merge);
 var x = document.getElementById("AllItems");
  x.innerHTML = merge.join();
 console.log();
}

function getEventTarget(e) {
    e = e || window.event
    return e.target || e.srcElement
}

function setTarget(obj) {
    objTargetText = obj
}

