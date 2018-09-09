//Defining variables.
var welcome = document.getElementById("welcomeBox");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var title = document.querySelector("h1"); 
var score = document.querySelector("h3");

//Set player score
var scoreNum = 0;

//Array for the 6 divs
var squares = [one, two, three, four, five, six];


function main() {

	//Picks random number between 0 and 5.
	var chosenSquare = Math.round(Math.random()*5);

	//Picks 3 random numbers between 0 and 255.
	for(var i = 0; i < squares.length; i++) {
		var red = Math.round(Math.random()*255);
		var green = Math.round(Math.random()*255);
		var blue = Math.round(Math.random()*255);

		//Applies the 3 random 0 - 255 numbers to an RGB style.
		squares[i].style.background = "rgb(" +red+ "," +green+ "," +blue+ ")";
	}

	//Sets the HTML in the h1 title tag to the random 1 - 6 number's corresponding div's rgb background color.
	title.innerHTML = squares[chosenSquare].style.background;

	//Loop that asigns event listeners to the 6 divs.
	squares.forEach(function(element) {
		element.addEventListener("click", function div() {
			//Check whether the clicked div's array index is the same as the chosen random 1 - 6 number.
			//If true:
			if(squares.indexOf(this) == chosenSquare) {
				scoreNum++;
				title.innerHTML = "You won!";
				score.innerHTML = "Score: " + scoreNum;
				//Remove event listener from winning div to prevent score cheating.
				element.removeEventListener("click", div);
				//Make all divs transparent.
				for (var i = squares.length - 6; i < 6; i++) {
					squares[i].style.visibility = "hidden";
				}
				//Make clicked div visible again.
				squares[chosenSquare].style.visibility = "visible";
			//If not true:
			} else {
				//Make clicked div transparent.
				this.style.visibility = "hidden";
			}
		});
	});
}
main();

//Hides welcome dialogue.
function start() {
	welcome.style.visibility = "hidden";
}

//Fired when RESET button is clicked.
function reset() {
	//Make all divs visible.
	for(var i = squares.length - 6; i < 6; i++) {
		squares[i].style.visibility = "visible";
	}
	main();
}

