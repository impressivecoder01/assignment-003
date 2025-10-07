//  Problem -01 ( Divide the Asset )
var area = 5550;
if(area > 0 && area<=10**9 ){
    var result = area / 2;
    console.log(result)
}

// Problem -02 ( Cycle or Laptop )
var money = 11000;
if(money >= 25000){
    console.log('Laptop')
}
else if(money >= 10000){
    console.log('Cycle')
}
else{
    console.log('Chocolate')
}


// Problem -03 ( Medicine Planner )
var lastDay = 11 ;
if(lastDay>3 && lastDay <=30){
    if(lastDay%2===0){
        console.log(`'1 - rest\','2 - rest','3 - medicine',`)
    }
}


// Problem 04 - (Delete / Store)
var fileName= "pdfData.jpg";
if(fileName.trim()[0]==='#'){
    console.log('Store')
}
// else{
//     for(var file of fileName)
// }


// Problem 05 - ( PH Email Generator )
var student= { name: "jhankar" , roll: 1014 ,department: "eee" };
console.log(student[`name`]+student[`roll`]+'.'+student[`department`]+'@ph.ac.bd')

// Problem 06 :  (Current Salary )
var experience = 30;
var startingSalary = 45000;