console.log('desctructing');
// object destructuring
const book = {
    name:'Ego is Enemy',
    author:'Pravin Gaikwad',
    publisher :{
        name:'Swati'
    }

}


const { name , author } = book;

console.log(`This is my first book name ${name} authour ${author}`);


// also we can dieren name also 
const { name :firstname , author:au } = book;



console.log(`This is my first book name ${firstname} authour ${au}`);


const { name :newname ='ME' , author:au1 } = book;



console.log(`This is my first book name ${newname} authour ${au1}`);

const { name:publishername } = book.publisher;

console.log(`Publisher name is ${publishername}`);


const { name:publishername1 = 'Pravin' } = book.publisher;

console.log(`Publisher name is ${publishername1}`);


// Array destructuring 

const item = ['Coffee (hot)','$2','$2.5','$2.75'];

const [ itemname,sprice,mprice,lprice ] = item;

console.log(`A medum ${itemname} cost ${mprice}`);
console.log(`A large ${itemname} cost ${lprice}`);
console.log(`A small ${itemname} cost ${sprice}`);


const [ itemname1,,mprice1,lprice1 ] = item;


console.log(`A medum ${itemname1} cost ${mprice1}`);
console.log(`A large ${itemname1} cost ${lprice1}`);
//console.log(`A small ${itemname1} cost ${sprice1}`);
