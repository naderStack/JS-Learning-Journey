<!DOCTYPE html>
<body>
<script>
// this for run all script in the page
let all = true // [be carefull ]
if (false || all){
let day1 = {
    name: "day1" ,
    eventBasic : "wedding myFriend" ,
    events : ['work','learn'],
    isTakeShow : false
}
console.log('in '+day1.name + '\ni work '+ Object.values(day1.events) + '\ni forget '+ day1.isTakeShow )
}
if (false || all){
let product1 = {
    name : 'headphone',
    'nake name' : 'hp4333-80',
    price : 10 ,
    colours : ['red','blue','gray','skyblue'],
    quantity : 400 ,
    comments : {
        'khalid' : ['good','no bad'],
        'wael' : 'good for work',
        'sara' : 'sure it is so good',
        'malik' : 'prefect',
    },
    commentsCount : function () {
        return Object.keys(this.comments).length
    },
    partsExternal : {
        name : 'cable',
        len  : '1 meter',
        isSupportTrafData : false  ,
        colours : ['purple','gold']
    },
    total : function () {
        return this.price * this.quantity
    },
    status : false ,
    actions : {
        likes : 4_000_000,
        unlikes : 3_000 ,
        getLikes () {
            return this.likes
        },
        getUnlikes () {
            return this.unlikes
        },
        doLikes (){
            ++this.likes
        }
    }
}
console.log(product1.actions.getLikes()) // 4_000_000
product1.actions.doLikes()
product1.actions.doLikes()
product1.actions.doLikes()
product1.actions.doLikes()
product1.actions.doLikes()
console.log(product1.actions.getLikes()) // 4_000_005
console.log(product1.partsExternal.colours[0])
console.log(product1.partsExternal.isSupportTrafData )
let price_product1 = product1.price
console.log(price_product1)
console.log(product1.total())
console.log(product1.colours.length) // get length items
console.log(product1['nake name'])
console.log(Date()) // "Sun Mar 29 2026 20:00:53 GMT+0200 (Central Africa Time)"
}
if (false || all ){
let cat = new Object()
// console.log(cat) // empty
cat.name = 'pindo'
cat.sleep = function () {
    return 'zzzz'
}
cat.age = "2year"
cat.getAge = function () {
    return parseInt(cat.age)
}
console.log(cat.getAge()) // 2
console.log(cat) // 1 proprety , 1 method
cat.color = 'white'
cat.listFood = ['mouse','break','fish']
cat.favFood = cat.listFood[cat.listFood.length - 1] // fish
}
let account = new Object();
account.blance = 0 ;
account.addMoney =  function  (amount = 1) {
    account.blance += amount
    return `your blance : ${account.blance}$`
    }
account.substractMoney = function (amount = 1) {
    // if acount.blance 3 and amount 1 substract 1$
    // but if 
    //          acount.blance 3 and amount 4 show you blance is not allow
    if (account.blance > amount) {
        account.blance -= amount
        return `your blance : ${account.blance}$`
    } else {
        return `your blance not allow ` 
    }
}
// console.log(cat)
let systemSettings = {
    'darkmode': false,
    background : '',
}
let userSettings = {
    'darkmode' : true ,
    background : 'catbrown.jpg'
}
// for reset system settings
Object.assign(userSettings,systemSettings)
// console.log(userSettings.background)
// console.log(user)
// Object.assign(user , address,settings )
// console.log(user) //Object { name: "nader", city: "rabak", "dark mode": true }
// dom js
document.title = 'test js'
// console.log(document.title)
function createImg () {
    document.body.innerHTML = "<img src >"
    let myImg = document.body.querySelector('img')
    console.log(myImg)
    myImg.title = 'my image for test '
    myImg.src = 'www.google.com/logo.jpg'
    if (myImg.hasAttribute('src')) {
        console.log(myImg.src)
       console.log( myImg.getAttribute('src') )
    } 
}
// createImg()
// document.body.appendChild(document.createElement('div'))
function mydiv (num) {
    let mydiv = document.createElement('div')
mydiv.className = "product"
let myh3 = document.createElement('h3')
myh3.append(document.createTextNode("heading "+num))
let myp = document.createElement('p')
myp.append(document.createTextNode("paragraph text"))
mydiv.append(myh3,myp)
document.body.append(mydiv)
}
// for (i=0;i<10;i++){
//     mydiv(i+1) // create a div for 10 time 
// }
function myForm () {
    // form
    // id form
    // add method get 
    // input
    // id input 
    // password
    // id pass
    // input button submit
    // // add placeholder input 
    // add placeholder pass
    // add text for warning
    let myForm = document.createElement('form')
    myForm.setAttribute('id','myfrom')
    myForm.setAttribute('methods','get')
    // input user 
    myInputUser = document.createElement('input')
    myInputUser.id = "myInputUser"
    myInputUser.setAttribute('placeholder','enter username ')
    // input password
    myPassword = document.createElement('input')
    myPassword.id = "myPassword"
    myPassword.setAttribute('placeholder','enter password')
    myPassword.setAttribute('type','password')
    // text for any warning
    myTextHelp = document.createElement('div')
    myTextHelp.id = 'myTextHelp'
    myContentTextHelp = document.createTextNode('full all fields ')
    myTextHelp.append(myContentTextHelp)
    // input button submit
    myButton = document.createElement('button')
    myButton.id = "myButton"
    myButton.append(document.createTextNode('submit'))
    //  new line
    let newLine = document.createElement('br')
    let newLine2 = document.createElement('br')
    // add fields to form 
    myForm.append(myInputUser,newLine,myPassword,newLine2,myTextHelp,myButton)
    // check data user in fields
    myInputUser.onfocus = function () {
        console.log('ok')
    }
    myForm.onsubmit = function (e) {
        e.preventDefault()
        if (! myInputUser.value == '' && ! myPassword.value == '' ) {
            myTextHelp.innerText = "good"
        }   else {
            myTextHelp.innerText = "fields is empty !"
        }     
    }
    // add to body
    document.body.appendChild(myForm)
    // console.log(myForm)
}
// myForm()
let mySmallForm = {
  inputUser: null,
  inputPassword: null,
  createForm: function() {
    let form = document.createElement('form');
    form.id = "myForm";
    form.method = "get";
    this.inputUser = document.createElement('input');
    this.inputUser.id = 'myInputUser';
    this.inputUser.placeholder = 'enter username';
    this.inputPassword = document.createElement('input');
    this.inputPassword.id = 'myPassword';
    this.inputPassword.placeholder = 'enter password';
    this.inputPassword.type = 'password';
    let button = document.createElement('button');
    button.id = 'myButton';
    button.textContent = 'submit';
    form.append(this.inputUser, this.inputPassword, button);
    document.body.appendChild(form);
    this.inputUser.onfocus = () => console.log('user input focus')
    this.inputPassword.onmouseenter = () => console.log('password input onmouseinter')
    this.inputPassword.onblur = () => myInputUser.focus()
    form.onsubmit = (e) => {
      e.preventDefault();
      this.validForm();
    };
  },
  validForm : function () {
    if (!this.inputUser.value && !this.inputPassword.value) {
        window.alert('your fields is empty !')
    } else {
        if (this.inputPassword.value.length < 6 ) {
            window.alert('your password < 6 chars ')
        }
    }
  }
};
// mySmallForm.createForm()
let otpFields = {
    input1 : null ,
    input2 : null ,
    input3 : null ,
    createForm : function () {
        let from = document.createElement('form') 
        from.id = 'myFromOtp'
        from.method = 'get'
        this.input1   = document.createElement('input')
        this.input2  = document.createElement('input')
        this.input3   = document.createElement('input')
        this.input1.id = 'input1'
        this.input2.id = 'input2'
        this.input3.id = 'input3'
        from.append(this.input1,this.input2,this.input3)
        document.body.append(from)
        this.input1.oninput = () => {
            this.input1.classList.add('green')
            this.input2.focus()
        }
        this.input2.oninput = () => {
            this.input2.classList.add('green')
            this.input3.focus()
        }
        this.input3.oninput = () => {
            this.input3.classList.add('green')
        }
    }
}
// lsetInterval(otpFields.createForm,1000)
// window.open('http://www.google.com','_blank','width:100')
let aboutMe = {
    name : 'nader',
    age : 27 ,
    country : 'sudan',
    skill : {
        js : 72,
        html : 80
    }
}
// const tax = 0.25
// let price = 40
// console.log(price * tax)
/*
===========================
**********   Elzero *******************
تكليفات JavaScript Bootcamp
===========================
*/
let via1 = () => {
    document.body.append(Object.assign(document.createElement('h3'),{textContent:"elzero",id:"text"}))
    text.style.color = "blue"
    text.style.fontSize = "80px"
    text.style.fontWeight = "bold"
    text.style.padding = "0"
    text.style.margin = "0"
}
// via1()
    // via 3
let via2 = () => {
        let oneNumber = null 
        let twoNumber = null
        oneNumber = 10
        twoNumber = 20
        console.log(`${oneNumber}${twoNumber}`)
        console.log(oneNumber+ "\n" + twoNumber)
        console.log(`${oneNumber} \n${twoNumber}`)
}
// via2()
    //التكليف 03
/*
    `I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""``
*/
let via3 =() => {
    console.log("    `I'm In \n \\\\ Love \\\\ \"\"\" \"\" \n ++ With  ++ \n \\\"\"\"\\\"\"\" \n \"\"JavaScript\"\"`")
}
// via3()
//التكليف 04
let via4 =() => {
        let a = 21
        let b = 20
        // dont loop variables 
        console.log(`_${a}`+`_${b}${a-b+b}`.repeat(a - b + a -b + a - b )+`_${b}` )
        // _21_2021_2021_2021_20_
}
// via4()
let via5 = () => {
    // Replace ? With Arithmetic Operators
    // console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400); // 0
    // 10 * 20  = 200
    // 15 % 3 = 0
    // 190 + 10 = 200
    // 200 + 200 - 400 = 0 
    console.log(10 * 20 + 15 % 3 + 190 + 10 - 400) // 0
    // with ai
console.log(10 - 20 * 15 % 3 * 190 % 10 * 400); // 0
}
// via5()
/*
التكليف رقم 5 من كورس جافا اسكربت الزيرو 
*/
let via6 = () => {
        let num = 3 ;
        console.log(num + num) //6
        console.log(num ** num / num - num) //6
        console.log(num * num / num + num ) //6
        console.log(true * num + num  ) // 6
        console.log(num * num - num ) ///6
        console.log(num += num ) // 6
        // for rest num
        num = 3
        // from ai
        console.log(num * (true + true)); // 6
        console.log(num - -num); // 6
        console.log(num - (false - num)); // 6 لأن false = 0
        console.log(num + num + (false + false)); // 3+3+0=6 ✅ لكن فيها false
}
// via6()
let via7 = () => {
        // قم بطباعة رسالة في ال Console كما في الصورة
        //     الألوان هي Red Green Blue
        //     حجم الخط هو 40px
        //     كلمة Web قم بعملها بخط عريض Bold
        console.log("%c hello %c Mr %c Nader","color:red;font-size:40px","color:silver","color:purple")
        // with ai
        const style = "font-size:40px";
        console.log(`%c hello %c Mr %c Nader`, 
        `color:red; ${style}`,
        `color:silver; ${style}`,
        `color:purple; ${style}`);
}
// via7()
let via8 =() => {
    console.group("group1")
console.group("child group1")
console.log("message inside group 1  child")
console.groupEnd()
console.groupEnd() // end group 1
console.group("group2")
console.group("child group2")
console.groupEnd()
console.log("message inside group 2 child")
}
// via8();
let via9 =() =>{
let routine =     ["wakeup",
"take a shower",
"pray",
"learn js ",
"learn typing",
"help mom",
"goto maket",
"breakfast",
"take a nap",
".....",
"go to sleep"]
const dailyRoutine = {
  step1: "wakeup",
  step2: "take a shower",
  step3: "pray",
  step4: "learn js",
  step5: "learn typing",
  step6: "help mom",
  step7: "goto maket",
  step8: "breakfast",
  step9: "take a nap",
  step10: ".....",
  step11: "go to sleep"
};
console.table (routine)
console.table(dailyRoutine)
}
// via9()
    // قم بطباعة الرقم 100000 ب 13 طريقة مختلفة
    // كل طريقة يجب أن تكون مختلفة عن الأخرى
    // إستخدام ال Operators الخاصة بالعمليات الحسابية يكون مرة واحدة فقط
    // هناك 3 امثلة لطباعة الرقم لتوضيح الفكرة أكثر
let via10 = () => {
        function clog(output){
              console.log(output)
              console.log("=".repeat(30))
        }
        clog(100_000)
        clog(100_000,0)
        clog(1e5)
        clog(parseInt("100000"))
        clog(10e4)
        clog(100e3)
        clog(1000e2)
        clog(100000)
        clog(50e3+50e3)
        clog(99e3 + 1e3)
        clog(99_99e1 + true * 10)
        clog(99e3+(100_000 / 100))
        clog(99_999 + true )
}
// via10()
//     إستخدم MIN_SAFE_INTEGER لتخرج بالنتيجة المطلوبة في المثال
// console.log(); // 9007199254740991
// typeof Number // Function
// console.log(-Number.MIN_SAFE_INTEGER )
function joke1(){
    console.log(`your blance in Bank : ${-Number.MIN_SAFE_INTEGER}`)
}
// joke1()
   // بسطر واحد فقط إستخدم MAX_SAFE_INTEGER لتخرج بالنتيجة رقم 16 بدون إستعمال أي أرقام
let via11 = () => {
   console.log(String(-Number.MIN_SAFE_INTEGER).length)
}
/*
لديك المتغير التالي قيمته
100.56789 Views
في السطر الأول نريد طباعة الرقم 100 فقط من المتغير والتأكد من أن نوعه هو Number
في السطر الثاني نريد طباعة الرقم 100.57 فقط من المتغير والتأكد من أن نوعه هو 
*/
let via12 =() => {
    // console.log("100.56789 Views")
console.log(parseFloat("100.56789 Views")) // 100.56789
}
// via12()
let via13 = ()=> {
    let points = 10;
// ++points
// ++points 
// ++points 
// or
points += 3
console.log(points); // 13
points -= 5
console.log(points); // 8;
}
// via13()
let via14 = () => {
    console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(! -50 > +"-40"); // true
console.log(! 10  >"-40"); // true
console.log(! "10" !=  10); // true
console.log(! 20 == false); // true
}
// via14()
let via15 =() => {
        let a = 20;
        let b = 30;
        let c = 10;
        console.log(a > b && a > c || a < b); // true
        console.log(a < b && a > c); // true
        console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true
                            // true   &&  true && true && true 
    }
// via15()
let via16 =() => {
    let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
// Method 1
 console.log(myFriends.slice(num - num , num )) // ["Ahmed", "Elham", "Osama"];
// Method 2
console.log(myFriends.splice(0,3)); // ["Ahmed", "Elham", "Osama"];
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
console.log(friends.splice(num - (num - true ) , num - true )); // ["Eman", "Osama"]
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
//Friday, April 17, 2026 5:53 PM
console.log(finalArr.concat(arrOne,arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
// cool
console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
// Write 3 Solutions
// 1 way
console.log(haystack[haystack.indexOf(needle)]) 
// 2 way
if (haystack.lastIndexOf("JS")) {
    console.log("found")
}
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];
console.log(allArrs.concat(arr1,arr2).sort().slice(4).join("").toLowerCase()); // fxy
}
// via16()
// ----------------------------------------------------
// script for run all via's in console.log()
function runAll() {
    for (let i = 1; i <= 10; i++) {
        eval(`via${i}()`);
    }
}
// runAll()
let via17 = () => {
    let start = 10
    let end  = 100
    let exclude = 40
    for (i=start ; i <= end ; i+=start) {
        if ( i == exclude ) {
            continue 
        }
        console.log(i)
    }
// 10
// 20 
// 30 
// 50 
// 60 
// 70 
// 80 
// 90 
// 100
}
// via17()
let via18 = () => {
    friends : ["Ahmed",
                "Sayed",
                "Eman",
                "Mahmoud",
                "Ameer",
                "Osama",
                "Sameh"]
    letter: "a"
    // function : this.friends.forEach(function(ele){
    //     if (!ele.startsWith(letter.toUpperCase())) {
    //     console.log(ele)
    // }
        // Sayed
        // Eman 
        // Mahmoud 
        // Osama 
        // Sameh
// })
}
let txt = 'nader elsadig ahmed hussan ahmed'
let txtRe = /e[a-z][a-z][a-z][a-z][a-z][a-z]/g
// console.log(txt.match(txtRe))
window.onload = () =>{
    // phone.onfocus =() => {
    //     phone.style.outline.color = "#80f480";
    // }
    // phone.onmouseenter = () => {
    //     phone.style.outline.color = "#80f480";
    // }
    phone.addEventListener('onclick',()=>{
        phone.style.outline.color = "#80f480";
        // alert('js')
    })
    phone.oninput =() =>{
        // console.log(phone.value)
        let re = /^0\d{9,10}/
        if (re.test(phone.value)) {
            phone.style.border ="2px solid #80f480"
            phone.style.color = "#80f480"
            phone.style.outline = "none"
        } else {
            phone.style.border ="2px solid #ff9494"
            phone.style.color = "#ff9494"
        }
    }
}
//------------------------------------------------------
 // oop
 //-----------------------------------------------------
// دالة بناء 
// old syntax constructor function
// function Factory (name,color,model){
//     this.name = name  
//     this.model = model
//     this.color = color 
// }
// new syntax
class Factory {
    constructor ( name,color,model) {
        this.name = name || "unkown"
        this.model = model 
        this.color = color 
        this.greet = () => { return 'hello'}
    }
    updateModeCar (newModel){
        this.model = newModel
    }
}
let carAhmed = new Factory('car','red','2022')
// let carElsadig = new Factory('car','black','2020')
/* problem closure
 Meta AI: لأنك شغلت الـ function فوراً في نفس اللفة قبل ما قيمة `i` تتغير. الـ Closure بيحصل لما الـ function تتخزن وتشتغل بعدين، فتلحق تشوف القيمة الأخيرة للمتغير. هنا كل استدعاء بياخد `i` بقيمتها الحالية وقت التنفيذ.
Nadir:  يمكن القول بان تحدث عن اللف لا تنظر تشغيل الدالة
*/
function createFuncs() {
    let funcs = [];
    // var i = 0  // made a problem closure
   for (let i = 0; i < 3; i++) {
    funcs.push(function() { console.log(i); });
    }
   return funcs;
}
/*
run -> funcs[] -> i = 0 -> funcs[()=>{0} ]
        funcs [0] -> i = 1 -> funcs[()=>{0,1} ]
        funcs [0,1] -> i = 2 -> funcs [()=>{0,1,2}]
        funcs [0,1,2] 
        funcs[0,1,2] <= ()
*/
 const arr = createFuncs();
//  arr[0](); arr[1](); arr[2]();
// console.log(arr)   
 const obj = {
   count: 0,
   increment: () => {
     obj.count++;
   },
   members () {
    x= ()=>{
        return this.count
    }
    return x()
   }
 };
 /*
عدد النطاقات
نطاق this 
 */ 
 obj.increment();
 obj.increment();
 obj.increment();
 obj.increment();
 obj.increment();
 obj.increment();
//  console.log(obj.count);
//  console.log(obj.members())
// المطلوب: صلّح الكود عشان `obj.count` يبقى 1  
// تلميح: Arrow functions مش بتعمل bind لـ `this`
// console.log(l)
// // var l = 4
/*
هنا x , y
من الكائنات 
و التى تشير الى نفس الموقع في الذاكرة 
مثل المصفوفة 
*/
{
let x ={value:20}
let y  = x
y.value = 43
// console.log(x.value)
}
/*
كل من u , m 
يشير الى موقع مختلف في الذاكرة 
*/
{
let m = 1 
let u = m 
u = 2
// console.log(m)
/* arrow functions
لا تمتلك this 
*/
}
d284 = {
    name : 'nader',
    getName : function () {
        return this.name
    },
    arrow : () => {
        return this.name
    }
}
// console.log(d284.name)
// console.log(d284.arrow())
if (false){
console.log([1,2,3].map(m => m * 2));
    let x = [1,2,3,4].filter(x => x > 2);
    console.log(x)
// [3, 4]
}
// [2, 4, 6]
{
// 1. دالة متزامنة (محاكية لبطء شديد)
function getDataSync() {
    let start = Date.now();
    while (Date.now() - start < 3000) { // حلقة فارغة لمدة 3 ثوانٍ
        // انتظر.... البرنامج متجمد تماماً هنا
    }
    return "البيانات بعد 3 ثوانٍ";
}
// console.log(getDataSync())
/* مثال خصائص غير متزامنة */
// setTimeout(()=>
// {console.log("task2")},2000)
// setTimeout(()=>
// {console.log("task1")},3000)
// setTimeout(()=>
// {console.log("task3")},5000)
// setTimeout(()=>
// {console.log("task4")},500)
}
/*
مثال ل
callback hell
قبل 
promise 
*/
if (false){
setTimeout(()=>{
console.log("get user")
    setTimeout(()=>{
    console.log("get posts")
        setTimeout(()=>{
        console.log("get comments")
        },2000)
    },200)
},2000)
}
if(false || all){
// mycallback hell
function myShow(callback,){
    let ele = document.createElement('div')
    ele.id = "demo"
    document.body.append(ele)
    ele.append(callback)
}
myShow()
function myAdd (num) {
    return num.toString() + "@"
}
function myCalc(num1 , num2,callback)
{
    let sum = num1 + num2
    return callback(sum)
}
// console.log(myShow(myCalc(45,5343,myAdd)))
}
if(false || all){
    // my first code promise // wooow
// at 8:04 pm 4-30-2026
let mypromisev1 = new Promise(function (pass,failed) {
    let status = true ;
    setTimeout(function (){
    if (status) {
        pass("task is pass")
    } else {
        failed("task is failed")
    }
    },2000)
})
// version 2
mypromisev1.catch(error => console.log(error));
// console.log(mypromisev1)
let myPromise = new Promise(function(resolve, reject) {
// Code that may take some time
    setTimeout(()=>{console.log("ok")},3000)
    if (false){
  resolve("نجحت العملية "); // when successful
    }else {
  reject("فشلت العملية");  // when error
    }}
);
myPromise.then(
    function (result) { console.log(result)}
    // function (error ) { console.log(error)}
)
myPromise.catch(
    (error) => console.log(error) 
)
}
/*
this code from ai but i edited it
*/
if (false || all){
    let loginPromise = new Promise(function(resolve, reject) {
  let loggedIn = false;
  if (loggedIn) {
    resolve("تم تسجيل الدخول بنجاح");
  } else {
    reject("فشل تسجيل الدخول");
  }
}); 
loginPromise.then(
  function(value) { console.log(value); },
  function(error) { console.log(error); }
);
}
if (!true) {
    let promise = Promise.reject("error");
promise
.then(function(value) {
  console.log(value);
})
.catch(function(value) {
  console.log(value);
});
}
if (false || all){
    Promise.resolve("A")
.then((value) =>  Promise.resolve(value + "B"))
.then((value) =>  Promise.resolve(value + "C"))
.then((value) =>  console.log(value));
   let myPromise = new Promise((resolve,reject)=>{
        let state = true
        if (state){
            resolve("a")
        } else {
            reject('error')
        }
    })
    // myPromise.then((v)=> myPromise.resolve(v+"b"))
    // myPromise.then((v)=> myPromise.resolve(v+"c"))
    // myPromise.then((v)=>console.log(v+'c'))
}
/*
first async code [fetch api ]
5/1/2026 5:41 pm 
*/
if (false) {
fetch('data.json')
.then((r)=>{
    return r.json()
})
.then((data)=>{
   for (let key in data ){
    console.log(key+"|"+data[key])
   }
})
// JSON كنص
let jsonText = `{
  "name": "Nader",
  "age": 22,
  "city": "Khartoum",
  "job": "Student"
}`;
}
// try{
//     console.log("Hello"
// }
// catch(e){
//     console.error(e.name)
// }
if (false || all){
    function repeat(n){
        if (n == 1) return ;
        console.log(n)
        repeat(n - 1)
    }
    repeat(10)
}
if (false || all){
// similar callback functions
function greet(name,callback){
    callback(name)
}
function test(n){
        console.log(`${n} form callback functions!!`)
    }
greet('nader',test)
}
</script>
<input id="phone" type="phone">
</body>
