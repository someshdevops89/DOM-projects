var change = document.querySelector("h5")
var target = document.querySelector("#Friend")
var removeFriend = document.querySelector("#remove")
target.addEventListener("click",function(){

    change.innerHTML = "Friends"
    change.style.color = "green"



})
removeFriend.addEventListener("click", function(){


change.innerHTML = "Suggestion"
change.style.color = "palevioletred"




})