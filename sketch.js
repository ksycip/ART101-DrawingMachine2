let array = [];

function setup() {
  //createCanvas(600, 600);
  //background(220);



  var cnv = createCanvas(600, 600);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);

    background(242, 225, 215);

    strokeWeight(10);
    noFill();
}

function draw() {


  if (mouseIsPressed){
    //line(mouseX, mouseY,pmouseX, pmouseY);
    background(242, 225, 215);
    array.push([mouseX, mouseY]);

    //stroke(map(mouseX, 0, 600, 0, 255, true));
    // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);


  }


}

function keyTyped(){

  if (key === 's'){
    //save this image
    saveCanvas('fileName', 'png');
  } else if(key === 'd'){
    //display image
    background(255);
beginShape();
    for(let i = 0; i < array.length; i++){
      //line(array[i][0], array [i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array [i][1]);
        }
endShape();



    //line(array[0][0], array [0][1], array[1][0], array[1][1]);
    // line(array[1][0], array [1][1], array[2][0], array[2][1]);

  }

  return false;

}
