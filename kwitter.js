function add_User(){
user_name=document.getElementById("user_name").value;
localStorage.getItem("user_name",user_name);
window.location="Kwitter_room.html";
}
