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
let wWidth, wHeight;

function setup() {
  wWidth = Math.round(random(400,windowWidth - 10));
  wHeight = Math.round(random(400, windowHeight - 40));
  createCanvas(wWidth, wHeight);
  gMean = (sqrt(5) + 1 )/2
  goldenX1 = wWidth/(gMean+1);
  goldenX2 = wWidth*gMean/(gMean+1);
  goldenY = wHeight*gMean/(gMean+1);
  let NumOfPoints = Math.round(random(2,7));
  for (let i = 0; i < NumOfPoints; i++){
    if(i==0){
      let randomX = randomGaussian(goldenX1, 100);
      let randomY = randomGaussian(goldenY, 100);
      randomPoints.push([randomX,randomY]);
    }
    else{
      let randomX = Math.round(random(120,wWidth - 120));
      let randomY = Math.round(random(120,wHeight - 120));
      randomPoints.push([randomX,randomY]);
    }
  }
}

function draw() {
  background(255);
  stroke(0,10);
  strokeWeight(2);
  line(goldenX1,0, goldenX1, wHeight);
  line(0, goldenY, wWidth, goldenY);
  stroke(0,200);
  noFill();
  randomPoints.forEach(function(value, index, arrayObj) {
    point(value[0],value[1]);
    if(index == 0){
      noStroke();
      fill(252,202,104, 50);
      ellipse(value[0], value[1], 40, 40);
      ellipse(value[0], value[1], 120, 120);
      stroke(125,149,164, 150);
      line(value[0], 0, value[0], wHeight);
      line(0, value[1], wWidth,value[1]);
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



