$(document).ready(function() {
    console.log("Now jQuery is in a seperate file...!")

    //Events in jQuery
    //Mouse events = click, dblclick, mouseenter, mouseleave
    //keyboard events = keypress, keyup, keydown
    //form event = submit, change, focus, blur
    //document/ window events = load resize scroll, unload

    //DOUBLE CLICK EVENT

    $('p').dblclick(function(){
        console.log('you double clicked p', this)
     });

     // MOUSE ENTER EVENT
     
     //$('p').mouseenter(function(){
        // console.log('you entered p', this);
     //});

     //MOUSE LEAVE EVENT

     //$('p').mouseleave(function(){
       // console.log('you leave from p', this)
     //});

     // MOUSE HOVER EVENT

     $('p').hover(function(){
        console.log('you hovered on p', this)},
        function(){
           console.log("Exiting...!")
     })

    });
    