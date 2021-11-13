const clickTo = document.querySelector(".nav-toggle"),
    clickAc = document.querySelector(".nav ul");
clickTo.onclick = function(){
    clickAc.classList.toggle("active");
}

const ulActive = document.querySelector(".ul-active"),
    Index = document.querySelectorAll(".index");


ulActive.addEventListener("click", (event) =>{
    // console.log(event.target);
    if(event.target.classList.contains("bul-a")){
        ulActive.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");

        const dataIndex = event.target.getAttribute("data-index");
        Index.forEach((item) => {
            // console.log(item);
            if(item.classList.contains(dataIndex)){
                console.log(item);
                document.querySelector(".index.active").classList.remove("active");
                item.classList.add("active");
                // item.classList.add("show1");
            }
        });
    }
})

