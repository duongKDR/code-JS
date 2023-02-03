const year = [ 2020 ,2019, 1992,1994]

for (const i of year) {
     if( i % 19 === 3 || i % 19 === 6 ||i % 19 === 9 ||i % 19 === 11||i % 19 === 14||i % 19 === 17 )
     console.log("nam nhuan",i); 
}
