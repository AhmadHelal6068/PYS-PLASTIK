// sleder start
var slide = document.querySelector(".gallery-item").children;
var nextSlide = document.querySelector(".right-slide"),
    prevSlide = document.querySelector(".left-slide"),
    totaSlide = slide.length,
    index = 0;

nextSlide.onclick = function(){
    console.log("next");
    next("next");
}
prevSlide.onclick = function(){
    console.log("prev");
    next("prev");
}
function next (direction){
    if(direction == "next"){
        index++;
        if(index == totaSlide){
            index = 0;
        }
    }else{
        if(index == 0){
            index = totaSlide -1;
        }else{
            index --;
        }
    }
    for(i=0; i<slide.length; i++){
        slide[i].classList.remove("active");
    }
    slide[index].classList.add("active");
    slide[index].classList.add("show");
}


const galleryCom = document.querySelectorAll(".box-g"),
    galleryBul = document.querySelector(".gallery-bul");
galleryBul.addEventListener("click", (event) =>{
    // console.log(galleryCom);
    if(event.target.classList.contains("bul")){
        console.log(event.target);
        galleryBul.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");

        const dataBul = event.target.getAttribute("data-bul");

        galleryCom.forEach((item) => {
            // console.log(item);
            if(item.classList.contains(dataBul)){
                console.log(item);
                document.querySelector(".box-g.active").classList.remove("active");
                item.classList.add("active");
                item.classList.add("show");

            }
        });
    }
})

