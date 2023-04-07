var firebaseConfig = {
      apiKey: "AIzaSyCjCzMZC3L0Yc7aRc2fkoA85k5LSgpsTlk",
      authDomain: "kwitter-project-a53f4.firebaseapp.com",
      databaseURL: "https://kwitter-project-a53f4-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-a53f4",
      storageBucket: "kwitter-project-a53f4.appspot.com",
      messagingSenderId: "908952673165",
      appId: "1:908952673165:web:e1844466ccb859e76a3bc4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welome "+user_name;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

       localStorage.setItem("room_name", room_name);

       window.location = "kwitter_page.html";

}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
  window.location = "index.html";
}
