// BOM
// Browser Object Modal
// window

// var obj = {
//     name:"Ali",
//     dob:"20-08-2004",
//     age:function (){

//     }
// }

// obj["name"]
// obj.name


// console.log(window)

// Popup in JS
// window.alert("Are you sure?")
// console.log(window.confirm("Are sure to logout?"))
// console.log(window.prompt("What's your name?"))


// var t = window.prompt("Enter Table Number?")
// for(var i = 1;i<=10;i++){
//     console.log(`${t} x ${i} = ${t*i}`)
// }




// console.log(window.location.reload())
// window.location.replace("http://google.com")
// window.navigator.geolocation.getCurrentPosition( function (position){ console.log(position) })
// alert("hello")

// console.log(window.innerWidth)
// console.log(window.innerHeight)













// DOM
// DOM is also a part of BOM
// Ducument Object Modal

// Methods to Access Element from DOM
// getElementById()  // Most Important
// getElementsByClassName()
// getElementsByTagName()
// querySelector()
// querySelectorAll()


// var ele = document.getElementById("btn")
// var ele = document.getElementsByClassName("btn")
// var ele = document.getElementsByTagName("button")
// var ele = document.querySelectorAll("button") // same as css selector

// console.log(ele)






var btn = document.getElementById("btn")
var pwd = document.getElementById("pwd")


function show(){
    pwd.type = "text"
    // btn.innerText = "Hide"
    btn.classList.replace("bx-hide","bx-show")

    btn.style.color = "green"
}

function hide(){
    pwd.type = "password"
    // btn.innerText = "Show"
    btn.classList.replace("bx-show","bx-hide")
    btn.style.color = "red"
}

// function showHide(){
//     if(pwd.type == "password"){
//         pwd.type = "text"
//         btn.innerText = "Hide"
//     }else{
//         pwd.type = "password"
//         btn.innerText = "Show"
//     }
// }





// btn.disabled = false
// btn.innerText = "Reloaded <br> Done"
// btn.innerHTML = "Reloaded <br> Done"










