class Feature {
    constructor(domElement) {
        this.domElement = domElement;
        // window.addEventListener('scroll',this.scrolling.bind(this));
        $(window).scroll(this.scrolling.bind(this));
    };

    scrolling () {
        if (pageYOffset + 600 > getPosition(this.domElement)) {
            this.domElement.classList.add('feature-active');
        } else {
            this.domElement.classList.remove('feature-active');
        }
    }
}

let features = document.querySelectorAll('.feature');
features.forEach(feature => new Feature(feature));

function getPosition(element) {
    var yPosition = 0;

    while(element) {
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    };

    return yPosition
}



