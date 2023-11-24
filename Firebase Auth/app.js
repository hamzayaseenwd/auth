const firebaseConfig = {
    apiKey: "AIzaSyAHWu4pKr5JMfMRdMO99gQRK4ZG_lLkFjg",
    authDomain: "authproject-cdfaa.firebaseapp.com",
    databaseURL: "https://authproject-cdfaa-default-rtdb.firebaseio.com",
    projectId: "authproject-cdfaa",
    storageBucket: "authproject-cdfaa.appspot.com",
    messagingSenderId: "321586442254",
    appId: "1:321586442254:web:2fa49b03ef2675c8c00c5f"
};

// Initialize Firebase
var firebase = firebase.initializeApp(firebaseConfig);


function getvalue(){
    var email = document.getElementById("email");
    var pass = document.getElementById("password");

    firebase.auth().createUserWithEmailAndPassword(email.value, pass.value)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        });

        var userObj = {
            email: email.value,
            pass: password.value
        }
        console.log(userObj)
        firebase.database().ref("userdetails").push(userObj);
}


function login(){

    var email = document.getElementById("Useremail");
    var pass = document.getElementById("Userpassword");

    firebase.auth().signInWithEmailAndPassword(email.value, pass.value)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
        });
}

function resetPass(){
    var email = document.getElementById("Useremail");
    firebase.auth().sendPasswordResetEmail(Useremail.value)
        .then(() => {
            alert("Password reset email sent successfully")
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
        });
}













// function getValue(){
//     var input = document.getElementById("name");
//     var getMultipleValue = localStorage.getItem("name");
//     var originalValue =JSON.parse(getMultipleValue);
//     if(!originalValue){
//         originalValue = [];
//     }
//     //console.log(name.value);
    
//     var obj = {
//         name:input.value,
//     }
//     originalValue.push(obj);
//     localStorage.setItem("name",JSON.stringify(originalValue));

// }