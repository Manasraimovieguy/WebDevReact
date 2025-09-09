// $("h1").css("color","red"); // Use this method if you want to place the script tages at the end of <body>

// $(document).ready(function(){ // Use this method if you want to place the script tags in the <head> section instead of at the end of <body>
//     $("h1").css("color","red");
// })

// $("h1").addClass("title-big margin-50") // way to add multiple classes to an element using jQuery

// console.log($("img").attr("src")) // a way to get the value src attribute in the <img> tag using jquery

// $("a").attr("href","https://www.yahoo.com") // a way to set/change the value of href attribute in the <a> tag using jquery

//Adding Event Listeners using jquery

    //using js only
    // for(let i=0; i<5; i++){
    //     document.querySelectorAll("button")[i].addEventListener("click", function(){
    //         document.querySelector("h1").style.color = "purple";
    //     })
    // }

    // using jquery to do the same thing
    // $("button").click(function(){
    //     $("h1").css("color","purple");
    // })

// keypress in jquery
// $("input").keypress(function(event){
//     console.log(event.key);
// })

//changing h1 based on keypress using jquery
$(document).keypress(function(event){
    $("h1").text(event.key);
})