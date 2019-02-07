let aboutSection = document.querySelector('.about');

aboutSectionChildren = Array.from(aboutSection.children);

// window.addEventListener('scroll',scrolling);
$(window).scroll(scrolling);

function getPosition(element) {
    var yPosition = 0;

    while(element) {
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    };

    return yPosition
}


function scrolling() {
    if (pageYOffset + 475 > getPosition(aboutSectionChildren[0])) {
        aboutSectionChildren[0].classList.add('box-active');
    } if (pageYOffset + 475 > getPosition(aboutSectionChildren[1])) {
        aboutSectionChildren[1].classList.add('box-active');
    } if (pageYOffset + 475 < getPosition(aboutSectionChildren[0])) {
        aboutSectionChildren[0].classList.remove('box-active');
    } if (pageYOffset + 475 < getPosition(aboutSectionChildren[1])) {
        aboutSectionChildren[1].classList.remove('box-active');
    }
}