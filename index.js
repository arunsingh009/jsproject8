var images = ['./images/pic1.jpg','./images/pic2.jpg','./images/pic3.jpg','./images/pic4.jpg','./images/pic5.jpg','./images/pic6.jpg'];
let imgIndex=0;
   
function forwardImage(){
    imgIndex = imgIndex +1;
    if(imgIndex>images.length-1){
        imgIndex = 0;
    }
    document.getElementById("crimg").src = images[imgIndex];
    
}
function backwardImage(){
    imgIndex = imgIndex-1;
    if(imgIndex<0){
        imgIndex = (images.length-1)
    }
    document.getElementById("crimg").src = images[imgIndex];
}