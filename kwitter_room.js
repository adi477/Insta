var firebaseConfig = {
    apiKey: "AIzaSyCVEz-8bgluWjaGdA7PoTzF6AKotGiG7mE",
    authDomain: "kwitter-82d04.firebaseapp.com",
    databaseURL: "https://kwitter-82d04-default-rtdb.firebaseio.com",
    projectId: "kwitter-82d04",
    storageBucket: "kwitter-82d04.appspot.com",
    messagingSenderId: "679407258835",
    appId: "1:679407258835:web:f1c9fc610de0a06cb25826"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById(user_name).innerHTML="Welcome"+ user_name+"!";
function addRoom(){
room_name=document.getElementById("room_name"). value ;
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kiwtter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("room_name-"+room_name);
row="<div class='room_name' id="+Room_names+" onclick='redirctToRoomName(this.id)' ># "+Room_names+"</div></hr>";
document.getElementById("output").innerHTML+=row;
    //End code
    });});}
function redirctToRoomName(name)
{
console.log(name);
localStorage=setItem("room_name",name);
window.location="kwitter_page.html";
}
getData();

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}
function send(){
msg=document.getElementById("msg"). value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0

});
}
