var tableauIcon = [
	"img/citron.jpg",
	"img/fraise.jpg",
	"img/orange.jpg",
	"img/poire.jpg",
"img/pomme.jpg",
];

let tableauParTour = new Array; 
console.log(tableauParTour);

// document.getElementById("fruit1").src =
// 	tableauIcon[Math.floor(Math.random() * tableauIcon.length)];

// if (document.getElementById("fruit1").src != "img/mystere.jpg") {
// 	document.getElementById("fruit2").src =
// 		tableauIcon[Math.floor(Math.random() * tableauIcon.length)];
// }

// if (document.getElementById("fruit2").src != "img/mystere.jpg") {
// 	document.getElementById("fruit3").src =
// 		tableauIcon[Math.floor(Math.random() * tableauIcon.length)];
// }
let tours = document.getElementById("affichage_coups");
let scoreId = document.getElementById("affichage_score");
var scoreTour = 0;
var scoreTotal = 0; 
var counter = 1;
var tourRestant = 5;

function playaudio() {
	var audio = new Audio("sound/Video Game Beep - Sound Effect.mp3");
	audio.play();
  }

function changerImage() {
	let id = "fruit" + counter;
	let imageName = document.getElementById(id);

	if (counter <= 3) {
		imageName.src = tableauIcon[Math.floor(Math.random() * tableauIcon.length)];
		tableauParTour[counter-1] = imageName.src;
        console.log(tableauParTour);  
		counter += 1;
	} 
	else {
		console.log("Recommence");

		counter = 1;
		tourRestant -= 1;

		
		if (tableauParTour[0] == tableauParTour[1] && tableauParTour[1] == tableauParTour[2]
			) 
			{scoreTour += 10;}
		

		else if (tableauParTour[0] ==
			tableauParTour[1]
		||
		tableauParTour[0] ==
		tableauParTour[2]
		||
		tableauParTour[1] ==
		tableauParTour[2]) 
		{scoreTour += 5;
		}


	

		
		
		document.getElementById("fruit1").src = "img/mystere.jpg";
		document.getElementById("fruit2").src = "img/mystere.jpg";
		document.getElementById("fruit3").src = "img/mystere.jpg";
		tableauParTour = [];

		
	
	
	}
		


	if (tourRestant <= 0 && scoreTour <=0) {
		document.getElementById("game_over").style.display = "block";
		tourRestant = 5;
		scoreTour = 0;

		
	}

	if (scoreTour > 0 && tourRestant <= 0) {
		document.getElementById("game_over").style.display = "none";
		alert ("Ton score est de :" +scoreTour);
		tourRestant = 5;
		scoreTour = 0;

	}

	
	


	scoreId.innerHTML = "Score : " + scoreTour;
	tours.innerHTML = "Tours restants : " + tourRestant;
	console.log(counter);
	return;
}

document.getElementById("game_over").style.display = "none";
const play = document.getElementById("button_play");
play.addEventListener("click", changerImage);
play.addEventListener("click", playaudio);
