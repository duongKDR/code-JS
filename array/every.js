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
//every
const methodEvery = arry.every(function (i) {
    return i.coin === 100;
  });
  