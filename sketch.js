/*
Ziel:
- Zufällig erzeugte Kompositionen visualisieren 
- Randomizer button
- Goldener Schnitt
- Verwendung von 
  - vertikalen Achsen 
  - horizontale Achsen
  - diagonalen Achsen (je nach Kante)
- Kreise (Durchmesser variabel, berührt goldenen Schnitt)


Umsetzungsvarianten:
- Randomizer
- Schachbrett, dessen einzelnen Flächen durchklickbar variiert werden können
*/

let gMean;
let goldenX1;
let goldenX2;
let goldenY;
let randomPoints = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  gMean = (sqrt(5) + 1 )/2
  goldenX1 = windowWidth/(gMean+1);
  goldenX2 = windowWidth*gMean/(gMean+1);
  goldenY = windowHeight*gMean/(gMean+1);
  let NumOfPoints = Math.round(random(1,10));
  for (let i = 0; i < NumOfPoints; i++){
    let randomX = Math.round(random(1,windowWidth));
    let randomY = Math.round(random(1,windowHeight));
    randomPoints.push([randomX,randomY]);
  }
  randomPoints
}

function draw() {
  background(255);
  stroke(0,30);
  strokeWeight(2);
  line(goldenX1,0, goldenX1, windowHeight);
  line(goldenX2,0, goldenX2, windowHeight);
  line(0, goldenY, windowWidth, goldenY);
  stroke(0,200);
  noFill();
  randomPoints.forEach(function(value, index, arrayObj) {
    point(value[0],value[1]);
    if (index != 0){
      let prevPoint = randomPoints[index - 1];
      stroke(125,149,164);
      line(prevPoint[0], prevPoint[1],value[0], value[1]);
    }
    if(index >= 2){
      let prevPoint1 = randomPoints[index - 2];
      let prevPoint2 = randomPoints[index - 1];
      stroke(0,100);
      bezier(prevPoint1[0], prevPoint1[1],prevPoint1[0], prevPoint1[1], prevPoint2[0], prevPoint2[1],value[0], value[1])
    }
  })

  // put drawing code here
}