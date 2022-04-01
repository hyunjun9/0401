let writerState = 0; // 0초기상태 1녹화중 2일시정지 3정지
let startTime = 0;

function setup() {
  createCanvas(667,375);
}

function draw() {
  background(100);
  
  fill(0);
  noStroke();
  rect(567,0,100,375);
  
  stroke(250);
  strokeWeight(5);
  ellipse(617,102,44,44);
  ellipse(617,187,44,44);
  ellipse(617,272,44,44);
  
  noFill();
  stroke(250);
  strokeWeight(1);
  ellipse(20,50,8,8);
  
  //녹화 버튼 생성
  fill(250,0,0);
  noStroke();
  ellipse(617,187,28,28); 
 
  // 일시정지 버튼 생성
  fill(250);
  noStroke();
  rect(610,92,5,20);
  rect(620,92,5,20);
  
  // 정지 버튼 생성
  rect(609,264,16,16);
  
  fill(196,196,196,50);
  noStroke();
  rect(10,10,84,20,6,6,6,6);
  rect(105,10,44,20,6,6,6,6);
  rect(10,40,84,20,6,6,6,6);
  rect(456,10,100,20,6,6,6,6);
  
  fill(0);
  let y = year();
  text('\n'+y+''+'.',20,10);
  
  let m = month();
  if(m < 10){
    text('\n'+'0'+m+'.',50,10);
  } else {
    text('\n'+m+'.',50,10);
  }
  
  let d = day();
  if(d < 10){
    text('\n'+'0'+d,70,10);
  } else {
    text('\n'+d,70,10);
  }
  
  let h = hour();
  if(h < 10){
    text('\n'+'0'+h+':',111,10);
  } else {
    text('\n'+h+':',111,10);
  }
  
  let passenger = 0;
  text('\n'+'passenger  '+ passenger,475,10);
  
  let mi = minute();
  if(mi < 10){
    text('\n'+'0'+mi,130,10);
  } else {
    text('\n'+mi,130,10);
  }
  
  let recordingTime = int(millis() - startTime);
  if(writerState == 1){
    text(recordingTime, 40 ,55);
  } else if(writerState == 3){
    recordingTime = 0;
    text(recordingTime, 40 ,55);
  } else if(writerState == 2){
    noLoop();
    text(recordingTime, 40 ,55);
  }
  
}

function startLog(){
  if(writerState == 2){
    writerState = 1;
    loop();
  } else if(writerState == 0 || writerState == 3){
    writerState = 1;
    startTime = millis();
  }
}

function stopLog(){
  writerState = 3;
  loop();
}

function pauseLog(){
  writerState = 2;
}

function mouseReleased(){
  if(dist(mouseX, mouseY, 617,187) <= 35){ //녹화시작버튼
    if(writerState != 1){
      startLog();
    }
  } else if(dist(mouseX, mouseY,610,92) <= 35){ //일시정지버튼
    if(writerState == 1){
      pauseLog();
    }
  } else if(dist(mouseX, mouseY,609,264) <= 35){ //정지버튼
    if(writerState == 1 || writerState == 2){
      stopLog();
    }
  }
}