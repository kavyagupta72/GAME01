let caruser = false;
let bikeuser = false;
console.log("hiiiii");
let all = document.querySelector(".whole");
let choice = document.querySelectorAll(".choice");
let button = document.querySelector(".btn");
choice.forEach((ch) => {
    ch.addEventListener("click",()=>{
        console.log("a choice was made.");
        if(ch.id === "car"){
            caruser = true;
            console.log("Car is chosen.")
        }
        else{
            bikeuser = true;
            console.log("Bike is chosen.");
        }
        window.location.href = "file:///C:/Users/HP/OneDrive/Documents/Javascript/Game01/index2.html"
    });
})
button.addEventListener("click",()=>{
    window.location.href = "file:///C:/Users/HP/OneDrive/Documents/Javascript/Game01/index.html"
});

