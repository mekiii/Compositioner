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
  let NumOfPoints = Math.round(random(2,7));
  for (let i = 0; i < NumOfPoints; i++){
    let randomX = Math.round(random(120,windowWidth - 120));
    let randomY = Math.round(random(120,windowHeight - 120));
    randomPoints.push([randomX,randomY]);
  }
  randomPoints
}

function draw() {
  background(255);
  stroke(0,10);
  strokeWeight(2);
  line(goldenX1,0, goldenX1, windowHeight);
  line(0, goldenY, windowWidth, goldenY);
  stroke(0,200);
  noFill();
  randomPoints.forEach(function(value, index, arrayObj) {
    point(value[0],value[1]);
    if(index == 0){
      //stroke(125,149,164, 150);
      noStroke();
      fill(252,202,104, 30);
      ellipse(value[0], value[1], 40, 40);
      ellipse(value[0], value[1], 120, 120);
      stroke(125,149,164, 150);
      line(value[0], 0, value[0], windowHeight);
      line(0, value[1],  windowWidth,value[1]);
      textSize(14);
      noStroke();
      fill(125,149,164, 150)
      text('Focus point', value[0] + 10, value[1]- 10);
      noFill()
    }
    else {
      let prevPoint = randomPoints[index - 1];
      stroke(36,63,101, 100);
      line(prevPoint[0], prevPoint[1],value[0], value[1]);
    }
    if(index >= 2){
      let prevPoint1 = randomPoints[index - 2];
      let prevPoint2 = randomPoints[index - 1];
      stroke(194,229,206,100);
      bezier(prevPoint1[0], prevPoint1[1],prevPoint1[0], prevPoint1[1], prevPoint2[0], prevPoint2[1],value[0], value[1])
    }
  })

  //Refresh button
  // put drawing code here
}



