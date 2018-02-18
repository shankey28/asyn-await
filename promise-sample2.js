const arr1 = [{
    name:'Shashi',
    address:'6430 shiloh woods dr'
},
{
    name:'Neha',
    address:'3234 Mercer drive'
}]

const getAddress = (name)=>{
   return new Promise((resolve,reject)=>{
       let arr = arr1.find((arr)=> arr.name===name);
       if(arr)
       resolve(arr);
       else
       reject('Address match not found');

    })
}

getAddress('Neha').then((arr)=>{
    console.log(`Address is: `,arr['address']);
}).catch((e)=>{
    console.log(e);
});