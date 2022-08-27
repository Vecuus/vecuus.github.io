/* Responsive*/

document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){
    document.querySelector(".menu").classList.toggle("mostrar_menu");
}

/* EFECTO PARALLAX */

window.onscroll = function (){

    var posicion = window.pageYOffset || document.documentElement.scrollTop;

    var element1 = document.getElementById("icon_ig");
    var element2 = document.getElementById("icon_link");
    var element3 = document.getElementById("icon_data");
    var element4 = document.getElementById("icon_profile");
    var element5 = document.getElementById("icon_study");
    var element6 = document.getElementById("icon_book");
    var element7 = document.getElementById("icon_html");
    var element8 = document.getElementById("icon_javascript");

    element1.style.bottom = posicion *0.1 + "px"
    element2.style.top = posicion *0.1 + "px"
    element3.style.top = posicion *0.1 + "px"
    element4.style.bottom = posicion *0.08 + "px"
    element5.style.bottom = posicion *0.08 + "px"
    element6.style.top = posicion *0.1 + "px"
    element7.style.bottom = posicion *0.03 + "px"
    element8.style.top = posicion *0.1 + "px"
}
