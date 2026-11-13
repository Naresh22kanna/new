// Callback 

function hi(name){
    console.log('My name is ' + name)
}

function hello(call){
    call('Naresh')
}
hello(hi);


function add(a,b,call){
    result=a+b;
    call(result)
}
function display(value){
    console.log("total :" + value)
}
add(2,3,display)

//Asynchronous Callback – setTimeout()

console.log('Hii');

setTimeout( function(){
    console.log('Hello')
},2000);
console.log('Bye');

 console.log('------------------------------------------------------------');

// Promise

mypromise= new Promise((resolve,reject)=>{
    isLoggedIn = true

    if(isLoggedIn){
        setTimeout(()=>{
        resolve("Login successful");
     },3000 );
        
    }else{
        reject("Login failed")
    }
});

mypromise
.then((message)=>{
    console.log(message);
})

.catch((error) => {
        console.log(error);
    });

 console.log('------------------------------------------------------------');
my= new Promise((resolve,reject)=>{

amt=1000;

if(amt>0){
resolve("Payment successful")
}
 else{
reject("Invalid amount")
 } 
});
my
.then((message)=>{ 
    console.log(message);
    return "Order confirmed";

})
.catch((err)=>{
    console.log(err)
})

.finally(()=> { 
    console.log("Payment Process Completed");
});