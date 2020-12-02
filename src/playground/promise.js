const promise = new Promise((resolve,reject) => {

    setTimeout(()=>{
        resolve({
            name:'Pravin',
            age:34
        })
    },5000);

    console.log('before');

    promise.then((data)=>{
        console.log(data);
    })

    console.log('after');
});

