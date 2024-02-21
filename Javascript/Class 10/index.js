var con = document.getElementById("container");

// var p = document.createElement("button")

// p.innerText = "Login"
// p.style.backgroundColor = "red"
// p.style.color = "white"
// p.style.padding = "10px 20px"

// p.addEventListener("mouseover",()=>p.style.backgroundColor = "green")
// p.addEventListener("mouseleave",()=>{p.style.backgroundColor = "blue"})
// p.addEventListener("mousedown",()=>p.style.transform = "scale(.8)")
// p.addEventListener("mouseup",()=>p.style.transform = "scale(1)")
// p.addEventListener("mousemove",()=>p.style.color = "black")

// document.addEventListener("keypress",(event)=>{
//     console.log(event)
// })

var tableInput = document.getElementById("tableNoInput");

function generateTable() {
  con.innerHTML = "";

  if(!tableInput.value){
    alert("Table Number is Required!")
    return
  }

  for (let i = 1; i <= 10; i++) {
    var p = document.createElement("p");
    p.innerText = `${tableInput.value} x ${i} =  ${tableInput.value * i}`;
    con.appendChild(p);
  }
}

tableInput.addEventListener("input",(event)=>{
    if(event.target.value){
        generateTable()
    }else{
        con.innerHTML = ""
    }
})

tableInput.addEventListener("keypress", function (event) {
  if(event.key == "Enter"){
    generateTable()
  }
});

// con.appendChild(p)
