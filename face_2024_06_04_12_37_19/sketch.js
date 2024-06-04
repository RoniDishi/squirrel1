function setup() {
  createCanvas(400, 400);
  frameRate(13);
  rectMode(CENTER);
}
function draw() {
  background(mouseX, mouseY, mouseX);
  let x = mouseX;
  let y = mouseY;

  translate(0, 0);
  fill(213, 147, 192); //middle pink
  strokeWeight(0);
  ellipse(200, 216, 237, 237); //face
  ellipse(122, 99, 68, 68); //outer left ear
  ellipse(271, 99, 68, 68); //outer right ear
  fill(79, 16, 58); //dark purple
  ellipse(122, 99, 43, 43); //left inner ear
  ellipse(271, 99, 43, 43); //right inner ear
  rect(186, 114, 8, 20); //left stripe
  rect(198, 114, 8, 20); //middle stripe
  rect(210, 114, 8, 20); //right stripe
  rect(199, 228, 12, 12); //nose
  fill(251, 232, 243); //pale pink
  ellipse(160, 181, 60, 86); //left outer eye
  ellipse(237, 181, 60, 86); // right outer eye
  ellipse(142, 249, 28, 16); //cheek
  ellipse(260, 249, 28, 16); //cheek
  ellipse(199, 279, 56, 56); //mouth
  fill(79, 16, 58); //dark purple
  ellipse(random(152, 168), 181, 46, 46); // left inner eye
  ellipse(random(230, 245), 181, 46, 46); // right inner eye

  //text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);

  fill(251, 232, 243); //pale pink
  if (mouseY < width / 2) {
    ellipse(199, 279, 56, 56);
  } else {
    ellipse(199, 279, 77, 77);
  }

  //acorn

  stroke("rgba(0,0,0,0)");
  fill("#7a280f");
  beginShape();
  vertex(28 + x, -25 + y);
  vertex(3 + x, -25 + y);
  vertex(3 + x, -34 + y);
  vertex(-4 + x, -34 + y);
  vertex(-4 + x, -25 + y);
  vertex(-29 + x, -25 + y);
  vertex(-29 + x, -8 + y);
  vertex(-26 + x, -8 + y);
  vertex(-25 + x, 20 + y);
  vertex(-25 + x, 20 + y);
  vertex(-25 + x, 20 + y);
  vertex(0 + x, 33 + y);
  vertex(25 + x, 20 + y);
  vertex(25 + x, 20 + y);
  vertex(25 + x, -8 + y);
  vertex(28 + x, -8 + y);
  vertex(28 + x, -25 + y);
  endShape();
}
