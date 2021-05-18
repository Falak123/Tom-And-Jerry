var bgImg;
var tom,tomImg1,tomImg2,tomImg3;


function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    tomImg1 = loadAnimation("images/cat1.png");
    tomImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3 = loadAnimation("images/cat4.png");
    jerryImg1 = loadAnimation("images/mouse1.png");
    jerryImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(800,600);
    tom.addAnimation("tomsitting",tomImg1);
    tom.scale = 0.15;

    jerry = createSprite(150,600);
    jerry.addAnimation("jerryStanding",jerryImg1);
    jerry.scale = 0.1;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2 ){

        tom.addAnimation("tomsitting",tomImg3);
        jerry.addAnimation("jerryStanding",jerryImg3);
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    jerry.addAnimation("jerryStanding",jerryImg2);
    jerry.frameDelay = 25;

    tom.addAnimation("tomsitting",tomImg2);
    tom.x = tom.x-10;
  }

  


}
