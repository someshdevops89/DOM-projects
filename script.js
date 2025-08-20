var change = document.querySelector("h5")
var target = document.querySelector("#Friend")
flag = 0;

target.addEventListener("click",function(){
    if(flag == 0){

    change.innerHTML = "Friends"
    change.style.color = "green"
    target.innerHTML = "Unfollow"
    flag = 1

}else{
    change.innerHTML = "Suggestion"
    change.style.color = "palevioletred"
    target.innerHTML = "Follow"





})
