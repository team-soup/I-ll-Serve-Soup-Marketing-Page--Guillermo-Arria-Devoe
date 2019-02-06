class Feature {
    constructor(domElement) {
        this.domElement = domElement;

    }
}

let features = document.querySelectorAll('.feature');
features.forEach(feature => new Feature(feature));

// Implementing an array method
Array.from(features).map(feature => feature.style.display = 'none')
