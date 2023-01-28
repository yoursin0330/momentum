const images=[
    "0.jpeg","1.jpeg","2.jpeg"
]
document.body.style.backgroundColor="black"
const chosenImg=images[Math.floor(Math.random()*images.length)]
document.body.style.backgroundImage=`url(img/${chosenImg})`;
