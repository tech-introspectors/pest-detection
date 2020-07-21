function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

// Get the modal
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");

var img = document.getElementById("myImg");
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");

var modalImg = document.getElementById("img01");
var modalImg1 = document.getElementById("img02");
var modalImg2 = document.getElementById("img03");

var captionText = document.getElementById("caption");
var captionText1 = document.getElementById("caption1");
var captionText2 = document.getElementById("caption2");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img1.onclick = function () {
    modal1.style.display = "block";
    modalImg1.src = this.src;
    captionText1.innerHTML = this.alt;
}

img2.onclick = function () {
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}
var span = document.getElementsByClassName("close1")[0];
span.onclick = function () {
    modal1.style.display = "none";
}

var span = document.getElementsByClassName("close2")[0];
span.onclick = function () {
    modal2.style.display = "none";
}
