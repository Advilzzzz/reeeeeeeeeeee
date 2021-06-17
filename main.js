canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
ball_x = 0;
ball_y = 0;
hole_x = 400;
hole_y = 800;
ball_image_width = 5;
ball_image_height = 5;
hole = "";
ball = "";
r = 50;
function load_img() {
	fabric.Image.fromURL("golf-h.png", function (Img) {
		hole.obj = Img;
		hole.obj.scaleToWidth(r);
		hole.obj.scaleToHeight(r);
		hole.obg.set({
			top: hole_y,
			left: hole_x
		})
		canvas.add(hole.obj);
	})
	new_image();
}

function new_image() {
	fabric.Image.fromURL("ball.png", function (Img) {
		ball.obj = Img;
		ball.obj.scaleToWidth(r);
		ball.obj.scaleToHeight(r);
		ball.obj.set({
			top: ball_y,
			left: ball_x
		})
		canvas.add(ball.obj);
	})
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ((ball_x == hole_x) && (ball_y == hole_y)) {
		canvas.remove(ball.obj);
		document.getElementById("hd3").innerHTML = "You Hit The Goal";
		document.getElementById("myCanvas").style.borderColor = "red";
	} else {
		if (keyPressed == '38'){
			up();
			console.log("up");
		}
		if (keyPressed == '40'){
			down();
			console.log("down");
		}
		if (keyPressed == '37'){
			left();
			console.log("left");
		}
		if (keyPressed == '39'){
			right();
			console.log("right");
		}
	}

	function up() {
		if(ball_y<= 450){
			ball_y = ball_y + ball_image_height;
			console.log("ball image height = " + ball_image_height);
			console.log("When up arrow key is pressed, x = "+ball_x+", y = "+ball_y);
			canvas.remove(ball.obj);
			new_image();
		}
	}

	function down() {
		if(ball_y<= 450){
			ball_y = ball_y - ball_image_height;
			console.log("ball image height = " + ball_image_height);
			console.log("When down arrow key is pressed, x = "+ball_x+", y = "+ball_y);
			canvas.remove(ball.obj);
			new_image();
		}
	}

	function left() {
		if (ball_x > 5) {
			ball_x = ball_x + ball_image_width;
			console.log("ball image height = " + ball_image_width);
			console.log("When down arrow key is pressed, x = "+ball_x+", y = "+ball_y);
			canvas.remove(ball.obj);
			new_image();
		}
	}

	function right() {
		if (ball_x <= 1050) {
			ball_x = ball_x - ball_image_width;
			console.log("ball image height = " + ball_image_width);
			console.log("When down arrow key is pressed, x = "+ball_x+", y = "+ball_y);
			canvas.remove(ball.obj);
			new_image();
		}
	}
}