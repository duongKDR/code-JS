let languages = ["JavaScript", "Java", "Python"];
let alpha = ["a", "b", "c"];
// concat
let languages1 = alpha.concat(languages)
console.log(languages1);

var arry = [
  {
    id: 1,
    bookN: 'XSa',
    coin: 100
  },
  {
    id: 2,
    bookN: 'XSa1',
    coin: 1500
  },

]

// forEach
arry.forEach(function (a, i) {
  console.log(i, a);
})


//every
const methodEvery = arry.every(function (i) {
  return i.coin === 100;
});


// some
const methodSome = arry.some(function (i) {
  return i.coin === 100;
});
console.log(methodSome);

console.log("============= methodFilter");

const methodFilter = arry.filter(function (i) {
  return i.coin === 100;
});


console.log(methodFilter);
let arrSo = [5, 3, 8, 1, 7];

const filterRangeInPlace = arrSo.filter(function (i) {

  if (4 < i && i < 8) {

    console.log(i);
    return i
  }

});

console.log(filterRangeInPlace);

const sapXep = arrSo.filter(function name(params) {
  
})
console.log("============= methodFind");
 

//find

  

const methodFind = arry.find(function (i) {

  return i.bookN = "XSa1";

})
console.log(methodFind);

const person = [
 {
  nameP: "ha",
  age:4,
 },
 {
  nameP: "hi",
  age: 7,
 }
 ,{
  nameP:"ba",
  age: 3
 }
]

const findP = person.find(function (i) 
{   return i.age > 4;

  
})

console.log(findP);
// map
const newmoney = arry.map(function (i) {
  return {
    id: i.id,
    bookN: `P: ${i.bookN}`,
    coin: i.coin
  }

});
console.log(newmoney)
console.log('-----------');
//pop()
console.log(languages1.pop());
console.log(languages1);
// reduces
var i = 0;

function reduces(a, b) {

  i++;
  return a + b.coin;
}
const r = arry.reduce(reduces, 0);

console.log(r);

// reduces ung dung vao noi 

var arr = [
  ['name', 'SX'],
  ['age', 18],
];
function arrToObj(arr) {
  return arr.reduce(function (a, b) {
    a[b[0]] = b[1]
    return a
  }, {})
}
console.log(arrToObj(arr));

//	 reverse()

console.log(languages1.reverse());
// includes
var title = "as krd s"
console.log(title.includes('krd', 1));
console.log(arr.includes('krd'));
// //mảng 2 chiều thành mảng 1 chiều
// const topics = [
//     {
//       topic: "ReactJS",
//       posts: [
//         { postID: "id1", title: "title1" },
//         { postID: "id2", title: "title2" },
//       ],
//     },
//     {
//       topic: "Vue.js",
//       posts: [
//         { postID: "id3", title: "title3" },
//         { postID: "id4", title: "title4" },
//       ],
//     },
//   ];
// console.log(allPosts);
// const allPosts = topics.reduce((acc, cur) => {
//     return [...acc, ...cur.posts];
//   }, []);

