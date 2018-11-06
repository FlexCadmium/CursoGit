firebase.initializeApp({
  apiKey: 'AIzaSyDtwdq17wyHdCMZJzNyDLHkk7GKUkoEMEk',
  authDomain: 'proyecto1-dd146.firebaseapp.com',
  projectId: 'proyecto1-dd146'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});




