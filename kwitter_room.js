function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({

    });

    localStorage.setItem("room_name" , room_name);
    window.location = "kwitter_page.html";
}