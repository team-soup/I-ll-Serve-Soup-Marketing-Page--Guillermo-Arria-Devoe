let topContainer = document.querySelector('.container');

topContainerChildren = Array.from(topContainer.children);

// window.addEventListener('load', textIn);
// window.addEventListener('load', boxIn);

$(window).load(textIn);
$(window).load(boxIn);

// USING .MAP ARRAY METHOD
function textIn() {
    topContainerChildren.slice(0,2).map(child => child.classList.add(`text-active`));
};

function boxIn() {
    topContainerChildren.map(child => child.classList.add(`box-active`));
};