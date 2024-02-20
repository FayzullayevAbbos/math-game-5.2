//header qism
const btnQosh = document.querySelector(".btnQushuv");
const btnAry = document.querySelector(".btnAyr");
const btnKop = document.querySelector(".btnKop");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

// main qism
let x = document.querySelector("#x");
let y = document.getElementById("y");

// achko hisoblash qismi
let person = document.querySelector(".person");
let laptop = document.querySelector(".laptop");
let time = document.querySelector(".time");

// variantlar
let div1 = document.querySelector(".div1")
let div2 = document.querySelector(".div2")
let div3 = document.querySelector(".div3")
let div4 = document.querySelector(".div4")

//darajalar
const easy = document.querySelector(".easy");
const medd = document.querySelector(".medd");
const hard = document.querySelector(".hard");

// funksiyalar

btnQosh.addEventListener("click", () => {
  btnQosh.className = "btnJS";
  btnKop.className = "btnKop";
  btnAry.className = "btnAyr";

  btn1.addEventListener("click", () => {
   
    birXonaQosh();
    xona1()
  });

  btn2.addEventListener("click", () => {
    ikkiXonaQosh();
    xona2()
  });

  btn3.addEventListener("click", () => {
    uchXonaQosh();
    xona3()
  });
});


btnAry.addEventListener("click", () => {
  btnAry.className = "btnJS";
  btnQosh.className = "btnQushuv";
  btnKop.className = "btnKop";

  btn1.addEventListener("click", () => {
    birXonaAyr();
    xona1()
  });

  btn2.addEventListener("click", () => {
    ikkiXonaAyr();
    xona2()
  });

  btn3.addEventListener("click", () => {
    uchXonaAyr();
    xona3()
  });
});


btnKop.addEventListener("click", () => {
  btnKop.className = "btnJS";
  btnQosh.className = "btnQushuv";
  btnAry.className = "btnAyr";

  btn1.addEventListener("click", () => {
    birXonaKop();
    xona1()
  });

  btn2.addEventListener("click", () => {
    ikkiXonaKop();
    xona2()
  });

  btn3.addEventListener("click", () => {
    uchXonaKop();
    xona3()
  });
});

// bir Xonalilar===========================================

function birXonaKop() {
  x.textContent = Math.ceil(Math.random() * 9);
  y.textContent = Math.ceil(Math.random() * 9);
  x = Math.ceil(Math.random() * 9);
  y = Math.ceil(Math.random() * 9);
  let kopaytma = x * y;
  return kopaytma;
}
function birXonaQosh() {
  x.textContent = Math.ceil(Math.random() * 9);
  y.textContent = Math.ceil(Math.random() * 9);
  x = Math.ceil(Math.random() * 9);
  y = Math.ceil(Math.random() * 9);
  let yigindi = x + y;
  return yigindi;
}
function birXonaAyr() {
  x.textContent = Math.ceil(Math.random() * 9);
  y.textContent = Math.ceil(Math.random() * 9);
  x = Math.ceil(Math.random() * 9);
  y = Math.ceil(Math.random() * 9);
  let ayrma = x - y;
  return ayrma;
}

//ikki Xonalilar========================================

function ikkiXonaKop() {
  x.textContent = Math.ceil(Math.random() * 99);
  y.textContent = Math.ceil(Math.random() * 99);
  x = Math.ceil(Math.random() * 99);
  y = Math.ceil(Math.random() * 99);
  let kopaytma = x * y;
  return kopaytma;
}
function ikkiXonaQosh() {
  x.textContent = Math.ceil(Math.random() * 99);
  y.textContent = Math.ceil(Math.random() * 99);
  x = Math.ceil(Math.random() * 99);
  y = Math.ceil(Math.random() * 99);
  let yigindi = x + y;
  return yigindi;
}
function ikkiXonaAyr() {
  x.textContent = Math.ceil(Math.random() * 99);
  y.textContent = Math.ceil(Math.random() * 99);
  x = Math.ceil(Math.random() * 99);
  y = Math.ceil(Math.random() * 99);
  let ayrma = x - y;
  return ayrma;
}

// uch xonalilar========================================

function uchXonaQosh() {
  x.textContent = Math.ceil(Math.random() * 999);
  y.textContent = Math.ceil(Math.random() * 999);
  x = Math.ceil(Math.random() * 999);
  y = Math.ceil(Math.random() * 999);
  let yigindi = x + y;
  return yigindi;
}
function uchXonaAyr() {
  x.textContent = Math.ceil(Math.random() * 999);
  y.textContent = Math.ceil(Math.random() * 999);
  x = +x.textContent 
  y = +y.textContent
  let ayrma = x - y;
  return ayrma;
}

// active class
function xona1(){
  btn1.className = "btnJS"
  btn2.className = "btn2"
  btn3.className = "btn3"
}
function xona2(){
  btn1.className = "btn1"
  btn2.className = "btnJS"
  btn3.className = "btn3"
}
function xona3(){
  btn1.className = "btn1"
  btn2.className = "btn2"
  btn3.className = "btnJS"
}





let a = 1// Math.ceil(Math.random() * 4);
let b = 2 //Math.ceil(Math.random() * 4);
let c = 3 //Math.ceil(Math.random() * 4);
let v = 4 //Math.ceil(Math.random() * 4);


let div11 = document.querySelector(`.div${a}`);
console.log((div11.textContent = Math.ceil(Math.random() * 999)));

let div12 = document.querySelector(`.div${b}`);
console.log((div12.textContent = Math.ceil(Math.random() * 999)));

let fungk = uchXonaAyr()

let div13 = document.querySelector(`.div${c}`);
console.log((div13.textContent = fungk)) //Math.ceil(Math.random() * 999)));
let abbos = 0
div13.addEventListener("click", () => {
  if(div13.textContent == fungk){
    abbos++
    person.textContent = `${abbos} : `
  }
})

let div14 = document.querySelector(`.div${v}`);
console.log((div14.textContent = Math.ceil(Math.random() * 999)));





// console.log(fungk + "<=");
// let f = () => {
//   console.log(1);
// }
// console.log(setInterval(f,1000));



