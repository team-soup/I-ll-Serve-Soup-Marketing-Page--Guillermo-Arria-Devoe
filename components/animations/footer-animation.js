let footer = document.querySelector('.bottom-content');

footerChildren = Array.from(footer.children);

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
    if (pageYOffset + 900 > getPosition(footerChildren[0])) {
        footerChildren[0].classList.add('box-active');
    } if (pageYOffset + 900 > getPosition(footerChildren[1])) {
        footerChildren[1].classList.add('box-active');
    } if (pageYOffset + 900 < getPosition(footerChildren[0])) {
        footerChildren[0].classList.remove('box-active');
    } if (pageYOffset + 900 < getPosition(footerChildren[1])) {
        footerChildren[1].classList.remove('box-active');
    }
}