
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
console.log(scores.map(score => score.name));
          //OR BELOW METHOD :
const getName =({ name }) => name;
console.log(scores.map(getName));
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

console.log(scores.filter(({marks})=> marks>=40));


//Task 3
//  Find all the names who failed the exams (Array methods)
// Expected Output
//   ["Yvette Merritt",
//   "Mccall Carter",
//   "Pate Collier",
//   "Hatfield Hodge"
// ];
var failname=scores.filter(({marks})=>marks<=40);
console.log(failname.map(({name}) => name));
       // or this method
console.log(
  scores
  .filter(({marks}) => marks <40)
  .map(({name}) => name)
);

// Task 4
// Find the Average marks
var average=scores.reduce((mark,ele)=>{
return mark+ele;
});
console.log(average);
var averagemark=average/7;
console.log(averagemark);

const sum =scores.reduce((sum,{marks}) => sum+marks,0);
console.log((sum/scores.length).toFixed(3));


// Task 5
// Find the topper's name
// Expected Output
// "Debra Beard"


var topper =scores.filter(({marks})=>marks>=90);
console.log(topper.map(({name}) => name));

// Task 6 - use es6
// Build -  intersection, uniq, without, groupBy
// https://lodash.com/docs/4.17.15#groupBy
