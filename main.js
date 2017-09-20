
var square1 = document.getElementById("square1");
var square2 = document.getElementById("square2");
var square3 = document.getElementById("square3");
var square4 = document.getElementById("square4");
var backlight = document.getElementById("backlight");

var MouseX, MouseY;
window.addEventListener( 'mousemove', onmousemove );

function Mouse3D(x_x, y_y){
  square1.style.transform = 'rotateX('+ ((-y_y/10)-550) +'deg) ' + 'rotateY('+ ((-x_x/10)-500) +'deg)' + ' translateZ(-60px)';
  backlight.style.transform = 'translateX('+ x_x/100 +'px) ' + 'translateY('+ y_y/100 +'px) ' + 'rotate('+ ((x_x-y_y)/100) +'deg)' + ' translateZ(-100px)';
}

function onmousemove( e ) {
	MouseX = e.pageX;
	MouseY = e.pageY;
  Mouse3D(MouseX, MouseY);
}


/*
//Old, Slider dependant way of inflating divs
var slider1 = document.getElementById("slider1");
var slider2 = document.getElementById("slider2");
slider1.addEventListener("input", Make3D, false);
slider2.addEventListener("input", Make3D, false);

function Make3D(){
  square1.style.transform = 'rotateX('+ slider1.value +'deg) ' + 'rotateY('+ (-slider2.value) +'deg)' + ' translateZ(-60px)';
}
//Ignition
Make3D();
*/
