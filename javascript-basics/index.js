// console.log(name1); //undefined
// console.log(name2); //error
// console.log(name3); //error

var name1 = 'rohan';
let name2 = 'rohan';
const name3 = 'rohan';

//-----------------

let arr = [1,2,3,4];
// console.log(arr.length);

//-------------------


const obj = {
    name: 'rohan',
    age: 21,
    dob: '05-aug-2023'
}

// console.log(obj);

//---------------------


class Student {
    display(){
        console.log("Hello student");
    }
}

// const student = new Student;
// student.display();

//-----------------------

//arrow function has access throughout dom, whereas function keyword doesn't

let anyName = {
    skill: 'backend',

    print: function(){
        console.log(this.skill);
    },
    length: 100,
    breadth: 100
}

// anyName.print();

//------------------------

let {length, breadth} = {...anyName};
// console.log(length, breadth);

//---------------------------

arr.unshift(0);

arr = [-1, ...arr];
arr = [...arr, 5];


// console.log(arr);

//------------------------------

let calculate = {
    total:0,
    add : function(val){
        this.total += val;
        return this; //returns entire object
    },
    mul: function(val){
        this.total *= val;
        return this;
    },
}

let res = calculate.add(10).mul(20);
//chain function
// console.log(res.total);

//----------------------------------

// for(x in arr){
//     console.log(x);
// }

// arr.map((index)=>{
//     console.log(index);
// })

let studObj = {
    studName: 'Skill lab',
    location: 'Mangalore'
}

// for(key in studObj){
//     let elem = studObj[key];
//     console.log(elem);
// }

//----------------------------------


//generator

// function multiple() {
//     return 10,20;
// }

function* multiple() {
    yield 10;
    yield 20;
}

const result = multiple();

// console.log(result.next());
// console.log(result.next());
// console.log(result.next());

// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);


//-------------------------------------

//keeping promises

function getData(){
    const data = {
    name: 'rohan',
    age: 21,
    dob: '05-aug-2023'
    }

    return new Promise((res, rej)=>{
        res(data);
    });
}

async function display() {
    const res = await getData();
    console.log(res);
}

display();