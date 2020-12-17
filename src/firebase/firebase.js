import firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  const database = firebase.database();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();



  export { firebase, googleAuthProvider, database as default }

  /*database.ref().set({
      name:'Pravin Gaikwad',
      age:33,
      stressLevel:6,
      job : {
            title :'software developer',
            company:'google' 
      },
      isSignle:false,
      location : {
          city:'Pune',
          Country:'India'
      }
  }).then( () => {
      console.log('Data is saved');
  }).catch( (error)=>{
        console.log("Error",error);
  } );

  database.ref('age').set(34)
  database.ref('location/city').set('Mumbai');
  
  database.ref('attributes').set({
      height:5.7,
      weight:67
  }).then(  ()=>{
    console.log('Data is updated');
  }).catch( (e) => {
    console.log('Error',e);
  } ) 
*/

// use for remove
  //database.ref('isSignle').remove().then( ()=>{ console.log('data is removed')} ).catch( (e) => { console.log("Unable to remove data") } );

  //database.ref('isSignle').set(null);

  //database.ref().remove().then( ()=>{ console.log('data is removed')} ).catch( (e) => { console.log("Unable to remove data") } );


  // use for updated data.

  /*database.ref().update({
      name : 'P1',
      age:'35',
      job:'Software Developer',
      isSignle: null
  })*/

  /*database.ref().update({
    stressLevel:9,
    'job/company':'Amazon',
    'location/city':'Banglore'
  })*/


  /*database.ref().on('value',(snapshot)=>{

    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);

  })*/

  // to add data
/*
  database.ref('expenses').push({
    'description':'Coffee',
    'note':'coffee expenses',
    'amount':50,
    'createdAt':1000
  });

  database.ref('expenses').push({
    'description':'Coffee 1',
    'note':'coffee expenses',
    'amount':50,
    'createdAt':1000
  });

  database.ref('expenses').push({
    'description':'Coffee 2',
    'note':'coffee expenses',
    'amount':50,
    'createdAt':1000
  });

  */

  /*database.ref('expenses').once('value').then( (snapshot) =>{

    const expenses = [];

    snapshot.forEach( (childSnapshot) => {
            expenses.push({
              id:childSnapshot.key,
              ...childSnapshot.val()
            }); 
    } );

    console.log(expenses);

  } );

database.ref('expenses').on('value', (snapshot)=>{
  const expenses = [];

  snapshot.forEach( (childSnapshot) => {
          expenses.push({
            id:childSnapshot.key,
            ...childSnapshot.val()
          }); 
  } );

  console.log(expenses);
})


database.ref('expenses').on('child_removed',(snapshot) => {

  console.log(snapshot.key, snapshot.val());

} );

database.ref('expenses').on('child_changed',(snapshot) => {
  console.log(snapshot.key,snapshot.val());
})

database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key,snapshot.val());
});
*/