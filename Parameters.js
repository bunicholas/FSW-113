let studentGrades = [ 90, 80 , 88, 98]
let curveGrages = function(grades, percentage){
   var newGrades = grades.map( grade=> {
    //    console.log(grade)
    //    console.log(percentage)
        return grade * percentage
    })
    return newGrades
}
var result = curveGrages(studentGrades)
console.log(result)