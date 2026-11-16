//Async and Await

function checklogin(){
    my=new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve('Welcome User');},3000);
});
    return my
}

async function login() {

    console.log("Loading User");
    
    result= await checklogin();
    console.log(result);
}

login()

 console.log('------------------------------------------------------------');

 function payment(){
    promise= new Promise((resolve, reject) => {
       
       amt=10;
    if(amt>0){
        setTimeout(()=>{
        resolve("Payment successful");
        },4000)

    } else{
        reject ("Invalid amount");
    }
    })
    return promise
 }

 async function pay(params) {       

    try{
        results= await payment();
        console.log(results);
    }
    catch(error){
        console.log(error);
    }
    
 }
 pay();