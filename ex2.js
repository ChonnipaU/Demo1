//--------รวมฟังก์ชั่น-------------------------
var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
function genArrayToken(number) {
    let arrToken = [];
    const genToken = function generateToken(n) { //parameter n
    var tokens = '';
    for(var i = 0; i < n; i++) {
        tokens += chars[Math.floor(Math.random() * chars.length)];
    }
        return tokens;
    }
        for(let i=0; i<number; i++) {
            arrToken.push(genToken(10))
    }
        return arrToken;
 }

let tokens = genArrayToken(10);
console.log(tokens);
//----------------------------------

/* แยกฟังก์ชั้น
var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
function generateToken(n) { //parameter n
    var tokens = '';
    for(var i = 0; i < n; i++) {
        tokens += chars[Math.floor(Math.random() * chars.length)];
    }
    return tokens;
}
function genArrayToken(number) {
    let arrToken = [];
    for(let i=0; i<number; i++) {
        arrToken.push(generateToken(10))
    }
    return arrToken;
 }
 
let tokens = genArrayToken(10);
console.log(tokens);
*/



/*----------แบบนี้ทำให้โปรแกรมทำงานหนักกว่าเดิม--------------
var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
function generateToken(n) { //parameter n
    var tokens = '';
    var arr =[];
    for(let i =0 ;i <10;i++){
        arr.push(tokens);
        for(var j = 1; j < n; j++) {
            tokens = chars[Math.floor(Math.random() * chars.length)];
            for(let k=1; k< n;k++){
                tokens += chars[Math.floor(Math.random() * chars.length)];
            }
        }
    }
    return  arr
}
console.log(generateToken(10));*/




