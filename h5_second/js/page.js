var swiper1 = new Swiper('.swiper-container-horizontal', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        hashnav: true,
    });
var clientHeight = document.body.clientHeight;
document.getElementById("page_word").style.height=clientHeight+"px";
document.getElementById("page_word").style.backgroundSize=clientHeight+"px";
var swiper2 = new Swiper('.section2', {
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        autoHeight: true,
    });
document.getElementById("guitarist").style.height=clientHeight+"px";
//document.getElementById("guitarist").style.width=auto;
var swiper3 = new Swiper('.section4', {
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        autoHeight: true,
        freeMode: true,
    });
document.getElementById("shuhun_div").style.height=clientHeight+"px";
var swiper4 = new Swiper('.section5', {
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        autoHeight: true,
        freeMode: true,
    });
document.getElementById("yoo_div").style.height=clientHeight+"px";
var swiper5 = new Swiper('.section6', {
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        autoHeight: true,
        freeMode: true,
    });

var swiper6 = new Swiper('.section7', {
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        autoHeight: true,
        freeMode: true,
    });
window.onload=function(){
    var clientwidth = document.body.clientWidth;
    var clientHeight = document.body.clientHeight;
    console.log(clientHeight);
    console.log(clientwidth);
    var screenwidth = document.body.scrollWidth;
    var screenHeight = document.body.scrollHeight;
    //document.getElementById("page_word").style.height=clientHeight+"px";
    //document.getElementById("page_word1").setAttribute("style","height:"+1700+"px");
    //document.getElementById("page_word2").setAttribute("style","height:"+1700+"px");
    console.log(screenHeight+500);
    console.log(screenHeight);
    console.log(screenwidth);
    console.log(document.body.scrollButtom);
};
var screenHeight = document.body.scrollHeight;
