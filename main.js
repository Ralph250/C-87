
var canvas = new fabric.Canvas("myCanvas");

var block_width = 30;
var block_height = 30;

var player_x = 0;
var player_y = 0;

var player_object = "" ;
var block_image = "";


function newImage(get_image){
    fabric.Image.fromURL(get_image, function(Img){
block_image = Img;

block_image.scaleToWidth(block_width);
block_image.scaleToHeight(block_height);

block_image.set({
top:player_y,
left:player_x


});
canvas.add(block_image);

    });
    
    }


window.addEventListener("keydown", mykeydown);
function mykeydown(e){
    
        var keyPressed = e.keyCode;
        console.log(keyPressed);

        if (e.shiftKey == true && keyPressed == "80"){
            console.log("shift and P pressed together");
            block_height = block_height + 10;
            block_width = block_width + 10;
            document.getElementById("current_width").innerHTML = (block_width);
            document.getElementById("current_height").innerHTML = (block_height);
        
        }

        if (e.shiftKey == true && keyPressed == "77"){
            console.log("shift and M pressed together");
            block_height = block_height - 10;
            block_width = block_width - 10;
            document.getElementById("current_width").innerHTML = (block_width);
            document.getElementById("current_height").innerHTML = (block_height);
        
        }

       if (keyPressed == "70"){
        console.log("f")     

        newImage("ironman_face.png");
             


       }


       if (keyPressed == "66"){
        console.log("b")     

        newImage("hulkd_body.png");
             


       }


       if (keyPressed == "76"){
        console.log("l")     

        newImage("spiderman_legs.png");
             


       }

       if (keyPressed == "82"){
        console.log("r")     

        newImage("thor_right_hand.png");
             


       }


       if (keyPressed == "72"){
        console.log("h")     

        newImage("thor_left_hand.png");
             


       }


//////////////////////////////////////////////////////////////////////////


if (keyPressed == "37"){
    console.log("left")     
     left();
   }

   if (keyPressed == "38"){
    console.log("up")     
     up();
   }

   if (keyPressed == "39"){
    console.log("right")     
     right();
   }

   if (keyPressed == "40"){
    console.log("down")     
     down();
   }











    }

