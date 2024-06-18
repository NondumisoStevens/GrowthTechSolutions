var sideBar = document.querySelector('.sidebar');

function openmenu(){

    sideBar.style.display ='flex'

}
function closemenu(){

    sideBar.style.display ='none'

}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    
}


const sliders = document.querySelectorAll('.slider-container');


sliders.forEach(slider => {
    const slides = slider.querySelector('.slides');
    const images = slides.querySelectorAll('img');
    let counter = 1;
    const slideWidth = images[0].clientWidth;
    const interval = 3000; // 2 seconds

    setInterval(() => {
        slides.style.transition = 'transform 0.5s ease-in-out';
        slides.style.transform = `translateX(${-slideWidth * counter}px)`;
        counter++;

        if (counter === images.length) {
            setTimeout(() => {
                slides.style.transition = 'none';
                slides.style.transform = 'translateX(0)';
                counter = 1;
            }, 500);
        }
    }, interval);
});

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});








       