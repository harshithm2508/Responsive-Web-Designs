var reqBtn = document.querySelector(".btn")
var friendStatus = document.querySelector(".status")
flag = 0

reqBtn.addEventListener("click",function(){
    if(flag == 0){
        friendStatus.textContent = "You are Friends";
        friendStatus.style.color = 'green'; 
        flag = 1
        reqBtn.textContent = "Remove"
    }

    else{
        friendStatus.textContent = "Strangers";
        friendStatus.style.color = "red";
        flag = 0
        reqBtn.textContent = "Add Friend"
    }

})