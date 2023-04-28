const btn = document.getElementById('toggler');
const btnIcon = document.getElementById('toggler-icon');
const contain = document.getElementById('contain');
const wind = document.getElementById('wind');


btn.onclick = function(){
    if(contain.getAttribute("data-theme")!="dark"){
        contain.setAttribute("data-theme", "dark");
        btnIcon.setAttribute("class", "fas fa-solid fa-sun");
        wind.setAttribute("style", "color : orange;");

    }else{
        contain.setAttribute("data-theme", "");
        wind.setAttribute("style", "color: #0f345fe3;");
        btnIcon.setAttribute("class", "fas fa-solid fa-moon");
    }
}
