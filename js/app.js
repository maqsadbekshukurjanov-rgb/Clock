// // setTimeout(() => {
// //     console.log("Its new program");
    
// // },20000)

// // setInterval(() => {
// //     console.log("welcome");
    
// // },1000)

// let num = 0
// let timer = setInterval(() =>{
//     num++
//     console.log(num);
    
//     if (num == 5){
//         clearInterval(timer)
//     }
// },1000);



// let num2 = 10;
// let minus = setInterval(() => {
//     console.log(num2);
//     son--;


//     if (num2 < 1){
//         clearInterval(minus)
//     }
    
// },1000);







// let count = document.getElementById("count")
// console.log(count);


let clock= document.getElementById("clock")
console.log(clock);

function Up(){
    let now = new Date();
    let h =now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();


}

setInterval(Up, 1000);