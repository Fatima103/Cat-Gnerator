// 24 October, 2020
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=size&";
    image.alt = "CAT gif";
    image.id = "myCat"
    div.appendChild(image);
}

function removeCat() {
    var div1 = document.getElementById('flex-cat-gen');
    var image1 = document.getElementById('myCat');
    div1.removeChild(image1);
}

