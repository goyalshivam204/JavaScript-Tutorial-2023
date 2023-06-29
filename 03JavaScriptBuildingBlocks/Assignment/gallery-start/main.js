const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const filenames = ["./images/pic1.jpg","./images/pic2.jpg","./images/pic3.jpg","./images/pic4.jpg","./images/pic5.jpg",]

/* Declaring the alternative text for each image file */
const altText = ["pic1","pic2","pic3","pic4","pic5"]

/* Looping through images */

for(let i = 0; i<filenames.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', filenames[i]);
    newImage.setAttribute('alt', altText);
    thumbBar.appendChild(newImage);
}


/* Wiring up the Darken/Lighten button */

btn.addEventListener("click",()=>{
    overlay.style.backgroundColor = "rgba(0,0,0,0.3)";
})
