var mouseEvent ="empty";
var last_pos_x;
var last_pos_y;

canvas= document.getElementById ("MyCanvasSwissCheese");

ctx= canvas.getContext("2d");
canvas.addEventListener("mousedown",My_Mousedown);
function My_Mousedown(e){
    color= document.getElementById("colorpizza").value;
    width= document.getElementById("widthbread").value;
    
mouseEvent="MouseDown";

}
canvas.addEventListener("mouseup",My_MouseUP);
function My_MouseUP(e){
    
mouseEvent="MouseUP";

}
canvas.addEventListener("mouseleave",My_MouseLeave);
function My_MouseLeave(e){
    
mouseEvent="MouseLeave";

}
canvas.addEventListener("mousemove",My_Mousemove);
function My_Mousemove(e){
current_x =e.clientX - canvas.offsetLeft;
current_y =e.clientY - canvas.offsetTop;
if(mouseEvent == "MouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth= width;
    ctx.moveTo(last_pos_x,last_pos_y);
    ctx.lineTo(current_x,current_y);

    ctx.stroke();   
}
last_pos_x = current_x;
last_pos_y = current_y;


}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    
    
}
var last_pos_touch_x;
var last_pos_touch_y;

var width = screen.width;
var new_width = screen.width-70;

var new_height = screen.height-300;
if(width < 992){
    document.getElementById("MyCanvasSwissCheese").width=new_width;
    document.getElementById("MyCanvasSwissCheese").height=new_height;
document.body.style.overflow="hidden";

}
canvas.addEventListener("touchstart",My_Touchstart);
function My_Touchstart(e){
color=document.getElementById("colorpizza").value;
W=document.getElementById("widthbread").value;
last_pos_touch_x=e.touches[0].clientX=canvas.offsetLeft;
last_pos_touch_y=e.touches[0].clientY=canvas.offsetTop;

}
canvas.addEventListener("touchmove",My_Touchmove);
function My_Touchmove(e){
current_touch_x=e.touches[0].clientX=canvas.offsetLeft;
current_touch_y=e.touches[0].clientY=canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=W;
ctx.moveTo(last_pos_touch_x,last_pos_touch_y);
ctx.lineTo(current_touch_x,current_touch_y);
ctx.stroke();
last_pos_touch_x=current_touch_x;
last_pos_touch_y=current_touch_y;
}












