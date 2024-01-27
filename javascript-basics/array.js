const array = [127,178,146,142,47];
// console.log(array);

// console.log(array.length);

// console.log(array.at(-1));

const array2 = ['rohan', 127, {age: 28, attending: true}, {display:function(){console.log('Hello World')}}];

// console.log(array2);

array2.college  = "Sahyadri"

// console.log(array2);

//----------------------------------------------------------------
//Rest operator-ES6

let returnReceived = restOperator(array2);
function restOperator(...a){
    // console.log(a);
}

const array3 = [...array2, 'babith']; // copy elements of array2 along with new element
const array4 = [array2, 'babith']; //creates seperate 2 elements
// console.log(array3);
// console.log(array4);

//---------------------------------------------------------------------

//callback
// const fetchData = callback =>{
//     setTimeout(() => {
//         callback('Done');
//     }, 2000);
// }

// setTimeout(()=>{
//     console.log('Timer is done');
//     fetchData(text=>{
//         console.log(text);
//     })
// }, 2500);

//----------------------------------------------------------------

const fetchDataAsync = async ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Done');
        }, 2000)
    })
}

//while using await the code wont move next until the promise is resolved
const main = async()=>{
    let a = await new Promise((resolve) => setTimeout(resolve, 0));
    console.log(a);

    console.log('Timer is done');

    const result = await fetchDataAsync();

    console.log(result, 'result');
}

main();