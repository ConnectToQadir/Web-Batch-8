// Itration
// Repeat
// loops
// for loop , while loop, do while loop

// var table = 9

// for( var i = 1  ;  i <= 20  ;  i++  ){
//     console.log(table, "x" , i , "=" , table * i  )
// }



// *****
// ****
// ***
// **
// *


// for(var i = 5; i >= 1 ; i--){
//     for(var o = i ; o >= 1 ; o--){
//         document.write("*")
//     }
//     document.write("<br>")
// }





var con = document.getElementById("container")



for(var i = 1; i<= 1000 ; i+= 1){


    var card = document.createElement("div")
    card.classList.add("card")


    var img = document.createElement("img")
    img.src = "https://picsum.photos/id/" + (1 + i) + "/200/200"
    card.appendChild(img)


    var h2 = document.createElement("h2")
    h2.innerText = "Product Title"
    card.appendChild(h2)


    var price = document.createElement("p")
    price.innerText = "Price"
    card.appendChild(price)

    con.appendChild(card)
}


