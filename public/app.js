console.log(firebase);

///// User Authentication /////
const auth = firebase.auth();

const whenSignedIn = $('#whenSignedIn');
const whenSignedOut = $('#whenSignedOut');

const signInBtn = $('#signInBtn');
const signOutBtn = $('#signOutBtn');

const userDetails = $('#userDetails');


const provider = new firebase.auth.GoogleAuthProvider();

/// Sign in event handlers

// signInBtn.onclick = () => auth.signInWithPopup(provider);

// signOutBtn.onclick = () => auth.signOut();

signInBtn.on("click", function(){ 
    auth.signInWithPopup(provider);
});

signOutBtn.on("click",function(){
    auth.signOut();
});

auth.onAuthStateChanged(user => {
    if (user) {
        // signed in
        whenSignedOut.attr("hidden") = false;
        whenSignedIn.attr("hidden") = true;
        console.log("hey");
        userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
    } else {
        // not signed in
        whenSignedIn.attr("hidden") = true;
        whenSignedOut.attr("hidden") = false;
        console.log("hey");
        userDetails.innerHTML = `<h3>Signed Out</h3>`;
    }
});