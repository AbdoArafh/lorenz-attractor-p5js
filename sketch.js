const scale = 10; // how much the points are scaled up or down
const rho = 28;
const segma = 10;
const beta = 8/3;
let points = [];
const dt = 0.01; // time scale
const maxPoints = 10; // max number of points to be drawn in eachframe
const trailEffect = 40; // 0-255 where 0 is the most trail and 255 no trail

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  points.push(new Point());
  while (points.length < maxPoints) {
    let point = new Point();
    let preState = points[points.length - 1].state;
    point.update(preState.x, preState.y, preState.z);
    points.push(point);
  }
  strokeWeight(5);
  background(0);
  noFill();
}

function draw() {
  colorMode(RGB);
  background(0, trailEffect);
  translate(width/2, height/2);
  let point = new Point();
  let preState = points[points.length - 1].state;
  point.update(preState.x, preState.y, preState.z);
  points.push(point);
  show(points);
  while (points.length > maxPoints) {
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

windowResized = () => {
  resizeCanvas(windowWidth, windowHeight);
}

mousePressed = () => {
  fullscreen(!fullscreen());
}