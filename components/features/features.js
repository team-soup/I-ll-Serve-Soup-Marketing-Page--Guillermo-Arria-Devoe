class Feature {
    constructor(domElement) {
        this.domElement = domElement;
    }
}

let features = document.querySelectorAll('.feature');
features.forEach(feature => new Feature(feature));