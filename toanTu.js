
 var so =[2,6,8,5]
function SoHoc(a) {
    var sum2SoDau= a[0]+ a[1]
    console.log("cong 2 so dau",sum2SoDau);
    var tru = a[2] - a[3]
    console.log("tru 2 so cuoi", tru);
    var nhanDauCuoi = a[3]*a [2]
    console.log("nhan 2 so cuoi",nhanDauCuoi);
    var chia = a[0]/a[1]
    console.log( "chia 2 so dau", chia);
    var layDu = a[2]%a[1]
    console.log( "lay du", layDu);
    var luyThua = a[0]**a[1]
    console.log( "luyThua", luyThua);
    let x = 5;
    x++;
    let z = x;
    console.log(" ++", z);
    let y = 6;
    y--;
    let t = y;
    console.log(" --",t);
}
SoHoc(so)

console.log("----------");

function TTGan() {
    let y = 10;
    y += 2;
    console.log("+=",y);
    let text = "Hello"; text += " World";
    console.log("+=",text);
    let x = 18 ;
    x -= 10; 
    console.log("-=",x);  
    let t = 2;
    t *= 5;
    console.log("*=",t); 
    let z = 6;
    z **= 2;
    console.log("**=",z);
    z /= 4;
    console.log("/=",z);
    x %= 5;
    console.log("%=",x);
}
TTGan()

function soSanh() {
    
}