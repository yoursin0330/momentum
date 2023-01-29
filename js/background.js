const IMG_LEN=16;
document.body.style.backgroundColor="white"
const chosenImg=Math.floor(Math.random()*IMG_LEN)
document.body.style.backgroundImage=`url(img/${chosenImg}.jpg)`;
document.body.style.backgroundSize="cover";
