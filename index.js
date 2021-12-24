var images = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg','pic6.jpg'];
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
