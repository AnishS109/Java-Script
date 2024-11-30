// NESTED (Call Back HEll Problem)
let a = 5;
let b = 6;
if(a>b){
    if(a>=b){
        console.log("A")
    }
}
else {
    console.log("B")
}


// Call Back Function

/*let getData = (dataId , getNextData) =>{
    setTimeout(() =>{
        console.log("data",dataId);
        if(getNextData){
            getNextData()
        }
    }, 5000)
}

getData(1 ,() =>{
    getData(2, () =>{
        getData(3, () =>{
            getData(4, () =>{
                getData(5)
            })
        })
    })
})


// PROMISES

function asyncFunction () {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("data1");
            resolve("Success");
        } , 5000)
    })
} 

console.log("Fetching Data 1");
let p1 = new asyncFunction();
p1.then((res) =>{
    console.log(res)
}*/


// PROMISE - Chain;

/*function asyncFunction1 () {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("data1");
            resolve("Success");
        } , 5000)
    })
} 

function asyncFunction2 () {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("Data 2");
            resolve("Success");
        } , 5000)
    })
}

console.log("Fetching Data 1");
let p1 = new asyncFunction1();
p1.then((res) =>{
    console.log(res)
    console.log("fetching data 2");
    let p2 = asyncFunction2();
    p2.then((res)=>{
    console.log(res);
    })
})


function getData (dataId) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("dataId = ",dataId)
            resolve("Success")
        }, 5000);
    })
}

getData(1).then((res) =>{
    console.log(res);
    getData(2).then((res)=>{
        console.log(res)
    })
})

function getData (dataId) {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("dataId = ", dataId);
            resolve("Success");
        }, 3000)
    })
}

getData(1).then((res) =>{
    return getData(2).then ((res)=>{
        return getData(3).then((res) =>{
            console.log(res);
        })
    })
})*/



// ASYNC AWAIT;


function api(apiId){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("Api ID = ", apiId)
            resolve("SUCCESS");
        }, 5000)
    })
}

async function getApiId() {
    await api(1)
    await api(2)
}

function getData (dataId) {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("dataId = ", dataId);
            resolve("Success");
        }, 3000)
    })
}

(async function () {
    {await getData(1);
    await getData(2);
    }
})();




