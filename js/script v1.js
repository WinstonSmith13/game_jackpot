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
		
		document.getElementById("fruit1").src = "img/mystere.jpg";
		document.getElementById("fruit2").src = "img/mystere.jpg";
		document.getElementById("fruit3").src = "img/mystere.jpg";
		tableauParTour = [];

		if (document.getElementById("fruit1").src ==
		document.getElementById("fruit2").src ==
		document.getElementById("fruit3").src
		) 
		{scoreTour += 300;}

		

		if (document.getElementById("fruit1").src ==
		document.getElementById("fruit2").src 
		||
		document.getElementById("fruit1").src ==
		document.getElementById("fruit3").src 
		||
		document.getElementById("fruit2").src ==
		document.getElementById("fruit3").src
	) 
	{scoreTour += 150;}
	
		else{
			scoreTour += 0
		}
		

	
	}
	scoreId.innerHTML = "Score : " + scoreTour;	


	if (tourRestant <= 0) {
		document.getElementById("game_over").style.display = "block";
		
	}

	
	


	
	tours.innerHTML = "Tours restants : " + tourRestant;
	console.log(counter);
}

document.getElementById("game_over").style.display = "none";
const play = document.getElementById("button_play");
play.addEventListener("click", changerImage);
