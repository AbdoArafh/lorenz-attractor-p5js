const scale = 10;
const rho = 28;
const segma = 10;
const beta = 8/3;
let points = [];
const dt = 0.01;
const maxPoints = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  points.push(new Point());
  strokeWeight(5);
  background(0);
  noFill();
}

function draw() {
  colorMode(RGB);
  background(0, 100);
  translate(width/2, height/2);
  let point = new Point();
  let preState = points[points.length - 1].state;
  point.update(preState.x, preState.y, preState.z);
  points.push(point);
  show(points);
  if (points.length > maxPoints) {
    points.shift();
  }
}

show = (points) => {
  beginShape();
  colorMode(HSB);
  for (let p of points) {
    stroke(p.state.z * scale, 255, 255)
    vertex(p.state.x * scale, p.state.y * scale);
  }
  endShape();
}