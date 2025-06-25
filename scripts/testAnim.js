var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

let x= 0;// position du cercle
let speed= 2; // vitesse de déplacement du cercle
draw();//demarre l'animation

export function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Efface le canvas a chaque frame

    ctx.beginPath();
    ctx.arc(x, 30,10,0, Math.PI *2); // (x, y, rayon, angle de départ, angle de fin)
    ctx.fillStyle = 'red'; // Couleur du cercle
    ctx.fill(); // Remplit le cercle

    x+= speed; // Déplace le cercle vers la droite horizontalement
requestAnimationFrame(draw);   // Appelle la fonction draw à chaque frame
}

  //1. Animation cercle
    //  setInterval(draw, 1800 );
    
     

     