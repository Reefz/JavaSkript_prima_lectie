// // const name = 1;
// // let name1 = "string";
// // let name2 = true;
// // let name3 = false;
// // let name4 = null;
// // let name5 = undefined;
// // // var name2 = 3;




// // console.log(name);
// // console.log(name1);



// // let score = null;

// // let ion = 2;
// // let vasea = 4;

// // score = ion + vasea

// //  const nume = "Craciun"
// //  const prenume = "Catalin"

// // console.log(nume + "  " + prenume);
// // // console.log(score);


// // alert("sall")
// // prompt("salut eu sunt Catalin")
// // prompt("citi ani ai?")

// let namber = 5;
// let zece = 10;
// console.log(zece);
// zece = 50;
// let score = namber + zece
// console.log(zece);

// console.log(score);

// const a= 2;
// const b= 3;

// if (c === 10 && e === 10) {
//     console.log("sunt egale")
// } else {
//     console.log("nus egale")
// }
// if (a > b) {
//     console.log("tfue")
// } else {
//     console.log("false")
// }

// if (a > 10) {
//     console.log("incorect")
// } else if(a === "2") {
//     console.log("sunt egale")
// }
// else{
//     console.log("errore")
// }

// let fruit = "apple"

// switch (fruit) {
//     case "orange":
//         console.log("Orange $0.59")
        
//         break;
//     case "apple":
//         console.log("apple $1.59")
            
//         break; 
//     case "banana":
//         console.log("banana $2.59")
            
//         break;
//     default:
//         break;
// }

// let i = 1

// while (i => 5) {
//     console.log(i)
//     i += 1
// }

// do {
//     console.log(i);
//     i += 1;
// }while(i <= 5)
// for (let i = 0; 1 <= 5; i++) {
//     console.log(1)
// }
// let array = [
//     "patru"
//     "unu"
//     "doi"
//     "trei"
//     "patru"
//     "cinci"
// ];
// array.forEach(el =>{
//     if (el.includes("patru")){
//         console.log(el)
//     }
// })

// const first_number = prompt("first_number")
// const operator = prompt("mathematical operator")
// const second_number = prompt(second_number)


// if (operator === "+"){
//     console.log(Number(first_number) + Number(second_number))
// }else if(operator === "-"){
// console.log(Number(first_number) + Number(second_number))
// }else if(operator === "*"){ 
// console.log(Number(first_number) + Number(second_number))
// }else if(operator === "/"){
// console.log(Number(first_number) + Number(second_number))
// }else if(operator === "**");
// const arr = [];
// // console.log(arr.length);

// const array_1 = [1,2,3,4,5,6,"hello",true];
// // console.log(array_1);


// let array = [
// {
//     name:"Ion",
//     age:"50",
//     gen:"M"
// },
// {
//     name:"Vasea",
//     age:"70000",
//     gen:"M"
// },
// {
//     name:"Nadea",
//     age:"-1000",
//     gen:"M"
// },
// ]
// // // console.log(array[1].name);
// // array.forEach(el =>{
// //     console.log(el.name.includes("Ion"));

// // })
// function name(params) {
//     params.forEach(element => {
//         console.log(element);
//     });
// }

// // name(array);

// function name_1() {
//     console.log("salut");
// }

// // // name_1()

// // function calculator(numarUnu , numarDoi , operator) {
// //     let score = null
// //     score = numarUnu + operator + numarDoi
// //     console.log(score);
// // }
// // calculator(2,6,4)

// let user = []
 
// array.forEach(el => {
//     if (el.age > 20) {
//        user.push(el);
//         console.log(el);
//     }else {
//         console.log("Err");
//     }
// });
// console.log(user);

// let new_user = {
//     name:"Natasha",
//     age:"200",
//     gen:"F",
//        copil:{
//         name:"Marin",
//         age:"3,1415926535 8979323846 2643383279 5028841971 6939937510 5820974944 5923078164 0628620899 8628034825 3421170679 8214808651 3282306647 0938446095 5058223172 5359408128 4811174502 8410270193 8521105559 6446229489 5493038196 4428810975 6659334461 2847564823 3786783165 2712019091",
//        gen:"M",
//     }
// }
// user.push(new_user);
// user.unshift(new_user);
// console.log(user);

// const tag_h1 = document.querySelector(".title")
// const tag_h1_ALL = document.querySelectorAll("h1")

// tag_h1.innerHTML = "salut";
// tag_h1.style.color = "red";

// console.log(tag_h1);
// console.log(tag_h1_ALL);

// const body = document.querySelector("body")

// const paragraf = document.createElement("p")

// paragraf.innerHTML ="1992";
// paragraf.className = "age"
// body.appendChild(paragraf)

// const body_color = document.querySelector("body")

// function color(param) {
//     addEventListener("click", ()=>{
//         param.style.background = "blue";
//     })
// }
// color(body_color)


const array = [
    "JavaScript",
    "Dom Element",
    "Const",
    "let",
    "Operator",
]

// array.forEach(item =>{
//     const title = document.createElement("p")
//     title.innerHTML = item
//     console.log(title);
//     const container = document.querySelector(".container")
//     container.appendChild(title)
// })

function createElement(params) {
    params.forEach(item =>{
        const title = document.createElement("p")
        title.innerHTML = item
        console.log(title);
        const container = document.querySelector(".container")
        container.appendChild(title)
    })
}
createElement(array)