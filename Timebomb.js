let bombimgEl = document.getElementById("bombimg");
let defuserEl = document.getElementById("defuser");
let timerEl = document.getElementById("timer");
let messageEl = document.getElementById("message");
let pageEl = document.getElementById("page");
let btnEl = document.getElementById("btn");

let counter = 10;

let counterid = setInterval(() => {
    counter= counter - 1;
    timerEl.textContent= counter; 
    if(counter === 0){
        bombimgEl.src ="https://www.shutterstock.com/image-photo/terrible-explosion-nuclear-bomb-mushroom-600nw-2194195335.jpg"
        messageEl.textContent= "Boom!!!!!! You lost all Lifes"
        pageEl.style.color = "yellow";
        messageEl.style.fontSize = "30px"
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/672636/pexels-photo-672636.jpeg?cs=srgb&dl=pexels-moein-moradi-209759-672636.jpg&fm=jpg')";
        document.body.style.backgroundSize = '750px';
        clearInterval(counterid);
        defuserEl.style.display = "none";
        btnEl.style.display = "none"
    }
    
}, 1000);



function OnClearInterval(){
     let defuserVal = defuserEl.value;
     if(defuserVal === "defuse"){
        messageEl.textContent = "WOW.....You Defuse the Bomb successfully"
         bombimgEl.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTThKXMzQ3fFqjggnSseFvHmTDDyFHxKL5thQ&s"
         pageEl.style.color = "green ";
         clearInterval(counterid);
     }
     else if (defuserVal != "defuse" ){
         bombimgEl.src = "https://www.shutterstock.com/image-photo/terrible-explosion-nuclear-bomb-mushroom-600nw-2194195335.jpg"
         messageEl.textContent = "Boom!!!!!!You lost all Lifes "
         
         pageEl.style.color = "red";
         pageEl.style.backgroundImage = "url('https://images.pexels.com/photos/672636/pexels-photo-672636.jpeg?cs=srgb&dl=pexels-moein-moradi-209759-672636.jpg&fm=jpg')";

         clearInterval(counterid);
     }
}
