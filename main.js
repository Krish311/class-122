x = 0;
y = 0;
draw_circle ="";
draw_rect ="";

var speechrecognition = window.webkitspeechrecognition;

var recognition = new speechrecognition;

function start (){
   document.getElementById("status").innerHTML = "system is listening please speak";
   recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "the speech has been recognized as:" + content;
    if (content == "circle");
    {
        x = math.floor(math.random() * 900);
        y = math.floor(math.random() * 600);
        document.getElementById('status').innerHTML = "started drawing circle";
        draw_circle ="set";
    }
    if (content == "circle");
    {
        x = math.floor(math.random() * 900);
        y = math.floor(math.random() * 600);
        document.getElementById('status').innerHTML = "started drawing rectangle";
        draw_rect ="set";
    }
}

function setup(){
    canvas = createCanvas(900, 600);
}

function draw(){
    if(draw_circle =="set")
{
    radius = math.floor(math.random() * 100);
    circle(x,y,radius)
    document.getElementById('status').innerHTML = " Circle Is Drawn.";
    draw_circle ="";
}

if(draw_rect =="set")
{
    rect(x,y,70,50);
    document.getElementById('status').innerHTML = " rectangle Is Drawn.";
    draw_rect ="";
 }
}