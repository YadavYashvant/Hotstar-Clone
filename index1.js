let movies = [
    {
        name"falcon and the winter soldier",
        des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velt porro et
        image: "images.slider 2.png"
    },
    {
        name"Loki",
        des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velt porro et"
        image: "images.slider 1.png"
    },
    {
        name"wanda vision",
        des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velt porro et"
        image: "images.slider 3.png"
    },
    {
        name"raya and the last dragin",
        des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velt porro et"
        image: "images.slider 4.png"
    },
    {
        name"luca",
        des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velt porro et"
        image: "images.slider 5.png"
    }
];

const carousel=document.querySelector('.carousel');
let sliders=[];

let slideIndex=0;

const createSlide = () => {
    if(slideIndex>=movies.length){
        slideIndex=0;
    }


    let slide = document.createElement('div');
    var imgElement= document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);


    imgElement.src = movies[slideIndex].image;
    slideIndex++

    
    slide.className= "slider";
    content.className= "slide-content";
    h1.className= "movie-title";
    p.className= "movie-des";

    sliders.push(slide);
 
    if(sliders.length){
        sliders[0].style.marginLeft = 'calc(-${100 * (sliders.length - 2)}% - ${
            30* (sliders.length - 2)
        }px)';
    }
}

for(let i=0; i<3; i++){
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);



const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach((item) => {
    item.addEventListener("mouseover", () =>{
        let video = item.children[1];
        video.play();
    });
    item.addEventListener("mouseleave", () => {
        let video = item.children[1];
        video.pause();
    });
});



let cardConatainers = [...document.querySelectorAll('.card-conatiner')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxBtns = [...document.querySelectorAll('.nxtBtns')];

cardConatainers.forEach((items,1)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click',() =>{
        item.scrollLeft += containerWidth-200;
    })

    preBtns[i].addEventListener('click',() =>{
        item.scrollLeft -= containerWidth + 200;
    });
});