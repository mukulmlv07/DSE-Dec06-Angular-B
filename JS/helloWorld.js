var a=4;
var myPromise=new Promise((resolve,reject)=>{
if(a>5){
    resolve("Success")
}
else{
    reject("fail")
}
})

myPromise.then((res)=>{
    console.log(res)
},(err)=>{
    console.log(err)
}).then(re=>{
    console.log("dsds",re)
    // throw new Error("kuchh Dikkat hai")
}).then(r=>{
    console.log("dsd",r)
})
.catch(err=>{
    console.log("cTCH",err)
})
.finally(info=>{
    console.log(info)
})