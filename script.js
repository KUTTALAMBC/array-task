

const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];

 // Task 1
  // Print the name list - As an array
  // Expected Output
  // ["Yvette Merritt", "Lillian Ellis", "Mccall Carter", "Pate Collier" ,
  //  "Debra Beard", "Nettie Hancock",  "Hatfield Hodge"]
  
// const fname=scores.map((name)=>{
//   console.log(name);
//   return name,","
// })
//   console.log(fname);
console.log(scores[0].name+","+scores[1].name+","+scores[2].name+","+scores[3].name+","+scores[4].name+","+scores[5].name+","+scores[6].name);

// Task 2
// >=40 pass.. find those student that passed (Use array method)
// Expected Output
// [{
//     marks: 57,
//     name: "Lillian Ellis"
//   },
//     {
//     marks: 91,
//     name: "Debra Beard"
//   },
//   {
//     marks: 75,
//     name: "Nettie Hancock"
//   }]
var pass= scores.filter((marks)=>marks>=40);
console.log(pass);

//Task 3
//  Find all the names who failed the exams (Array methods)
// Expected Output
//   ["Yvette Merritt",
//   "Mccall Carter",
//   "Pate Collier",
//   "Hatfield Hodge"
// ];
var failname=scores.filter((mark)=>mark<=40);
console.log(failname);

// Task 4
// Find the Average marks
var average=scores.reduce((mark,ele)=>{
  return mark+ele;
});
console.log(average);
var averagemark=average/7;
console.log(averagemark);

// Task 5
// Find the topper's name
// Expected Output
// "Debra Beard"


var topper =scores.filter((mark)=>mark<=90);
console.log(topper);

// Task 6 - use es6
// Build -  intersection, uniq, without, groupBy
// https://lodash.com/docs/4.17.15#groupBy

