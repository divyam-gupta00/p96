function preload(){
beared= loadImage("images-removebg-preview.png")
}
function setup(){
canvas= createCanvas(500,400)
canvas.position( 500, 320)
video = createCapture(VIDEO)
video.hide()

poseNet = ml5.poseNet(video, modelLoded)
poseNet.on("pose", gotpose)
}
function draw(){
    image(video, 0, 0, 500, 400)
    image(beared, nosex, nosey, 60, 60)
}
function snap(){
    save("Beard Man.png")
}    
function modelLoded(){
    console.log("Video is There")
}
nosex=0;
nosey=0;
function gotpose(r){
if(r.length > 0)
console.log(r)
nosex= r[0].pose.nose.x - 104
nosey= r[0].pose.nose.y- 53
console.log("posestion x =" + r[0].pose.nose.x)
console.log("posestion y =" + r[0].pose.nose.y)
}
