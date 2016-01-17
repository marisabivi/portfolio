-var images = [
    "../images/me-1.jpg",
    "../images/me-2.jpg",
    "../images/me-3.jpg"];

function randImg() {
    var size = images.length
    var x = Math.floor(size * Math.random())
    document.getElementById('image').src = images[x];
}

randImg();