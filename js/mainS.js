
var gallerySistem = document.querySelector(".gallery-sistem-img").children;
var galleryPrev = document.querySelector(".gallery-left-slide"),
    galleryNext = document.querySelector(".gallery-right-slide"),
    leGallerySistem = gallerySistem.length;
    index = 0;
// console.log(leGallerySistem);
galleryNext.onclick = function(){
    console.log("next");
    nextS("next");
}
galleryPrev.onclick = function(){
    console.log("prev");
    nextS("prev");
}
function nextS (direction){
    if(direction == "next"){
        index++
        if(index == leGallerySistem){
            index = 0;
        }

    }else{
        if(index == 0){
            index = leGallerySistem -1
        }else{
            index--
        }
    }
    for(i=0; i<gallerySistem.length; i++){
        gallerySistem[i].classList.remove("active");
    }
    gallerySistem[index].classList.add("active");
    gallerySistem[index].classList.add("show");
}

const gallerySistemBul = document.querySelector(".gallery-sistem-bul"),
    gallerySistemTow = document.querySelectorAll(".text-i");

gallerySistemBul.addEventListener("click", (event) =>{
    console.log(event.target);
    if(event.target.classList.contains("gallery-bul")){
        gallerySistemBul.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");

        const dataBul = event.target.getAttribute("data-gallery");
        gallerySistemTow.forEach((item) => {
            // console.log(item);
            if(item.classList.contains(dataBul)){
                console.log(item);
                document.querySelector(".text-i.active").classList.remove("active");
                item.classList.add("active");
                item.classList.add("show1");
            }
        });
    }
})

