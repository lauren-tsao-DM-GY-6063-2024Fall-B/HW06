let data = [];

function preload() {
  data = loadTable("mushroom_2000.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(248, 237, 237);

  angleMode(DEGREES);

  //data
  for (let idx = 0; idx < data.getRowCount(); idx++) {
    let capColor = data.getString(idx, "cap-color");
    let stemHeight = data.getNum(idx, "stem-height");
    let stemWidth = data.getNum(idx, "stem-width");
    let capDiameter = data.getNum(idx, "cap-diameter");
    let bruiseOrbleed = data.getString(idx, "does-bruise-or-bleed");
    let h = map(stemHeight, 0, 20, 0, height);
    let thicc = map(stemWidth, 10, 20, 0, 1);
    let dAngle = map(capDiameter, 0, 19, 0, 360);
    let d = map(capDiameter, 0, 19, 0, height / 3.5);


    //cap diameter and color
    push();
    noStroke();

    //yellow
    if (capColor.includes("o")) {
      fill(255, 191, 0);
      arc(width / 2, height / 2, d, d, 0, dAngle);
    } 
    
    //pale orange
    else if (capColor.includes("e")) {
    fill(255, 154, 0);
    arc(width / 2, height / 2, d, d, 0, dAngle);
    } 
    
    //light yellow
    else if (capColor.includes("g")) {
    fill(254, 238, 145);
    arc(width / 2, height / 2, d, d, 0, dAngle);
    } 
    
    //orange
    else if (capColor.includes("n")) {
      fill(255, 101, 50);
      arc(width / 2, height / 2, d, d, 0, dAngle);
    } 
    
    //pink
    else if (capColor.includes("r")) {
      fill(209, 3, 99);
      arc(width / 2, height / 2, d, d, 0, dAngle);
    }

    pop();

    //stem height and bruise-or-bleed
    push();
    noFill();
    strokeWeight(thicc);
    if (bruiseOrbleed.includes("f")) {
      stroke(82, 34, 88);
    } else if (bruiseOrbleed.includes("t")) {
      stroke(200, 0, 54);
    }
    arc(width / 2, height / 2, h, h, 0, h);

    pop();
  }
}
function draw() {}
