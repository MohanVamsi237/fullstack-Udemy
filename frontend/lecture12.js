// console.log("one");
// console.log("two");

// setTimeout(()=>{
//     console.log("hello");
// },4000); // activates in 4000 milliseconds

// console.log("three");
// console.log("four");

// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sum){
//     sum(a,b);
// }

// calculator(1,2,sum);

// // a diff approach
// calculator(1,2,(a,b)=>{
//     console.log(a+b);
// });

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//     console.log("data",dataId);
//     if(getNextData){
//         getNextData();
//     }
//     }, 2000);
// }

// callback hell
// getData(1,()=>{
//     console.log("getting data2 ..")
//     getData(2,()=>{
//         console.log("getting data3 ..")
//         getData(3,()=>{
//             console.log("getting data4 ..")
//             getData(4);
//         })
//     });
// });

// The below ways will not work for the below examples  
//      better method for callback hell
// getData(1)
//     .then(getData(2))
//     .then(getData(3))
//     .then(getData(4))

//      best way for callback hell
// async function executdata() {
//     let data=await getData(1);
//     data=await getData(2);
//     data=await getData(3);
//     data=await getData(4);
// }

// executdata();

// let promise=new Promise((resolve,reject)=>{
//     console.log("i am a promise");
//     //resolve("success");
//     reject("some error occured");
// });

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("success");
        },4000);
    });
}

//promise chain
// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then(()=>{
//         console.log(res);
//     })
// });

// getData(1)
//     .then((res)=>{
//         return getData(2);
//     })
//     .then((res)=>{
//         return getData(3);
//     })
//     .then((res)=>{
//         console.log("successs");
//     });

// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("i am a promise");
//         // resolve("success");
//         reject("error");
//     });
// };

// let promise=getPromise();
// promise.then(()=>{
//     console.log("promise fulfilled");
// });

// promise.catch((err)=>{
//     console.log("rejected",err);
// });

// function asyncFunc1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("some data1");
//             resolve("success");
//         },4000);
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("some data2");
//             resolve("success");
//         },4000);
//     });
// }

// console.log("fetching data1...");
// asyncFunc1().then((res)=>{
//     console.log("fetching data2...");
//     asyncFunc2().then((res)=>{});
// });

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve(200);
//         },2000);
//     });
// }

// async function getWeatherData(params) {
//     await api(); //1st call
//     await api(); //2nd call
// }

// async function getAllData() {
//     console.log("getting data1...");
//     await getData(1);
//     console.log("getting data2...");
//     await getData(2);
//     console.log("getting data3...");
//     await getData(3);
//     console.log("getting data4...");
//     await getData(4);
// }

//IIFE
// (async function getAllData() {
//     console.log("getting data1...");
//     await getData(1);
//     console.log("getting data2...");
//     await getData(2);
//     console.log("getting data3...");
//     await getData(3);
//     console.log("getting data4...");
//     await getData(4);
// })();