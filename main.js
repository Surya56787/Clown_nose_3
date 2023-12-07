nosex=0;
nosey=0;
function preload(){
img=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup(){
  canvas=createCanvas(400,400);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(400,400);
  video.hide();
  posenet=ml5.poseNet(video,modelLoaded);
  posenet.on("pose",gotResults);

}

function modelLoaded(){
  console.log("modelLoaded");
}

function draw(){
  image(video,0,0,400,400);
  //fill("red");
  //stroke("red");
  //circle(nosex,nosey,20);
  image(img,nosex,nosey,30,30);

}

function take_snapshot(){
    save("FilterImage.png");
}

function gotResults(results){
  console.log(results);
  nosex=results[0].pose.nose.x-15;
  nosey=results[0].pose.nose.y-15;
  console.log("nosex="+results[0].pose.nose.x);
  console.log("nosey="+results[0].pose.nose.y);
}

