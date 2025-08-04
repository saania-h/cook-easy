// modal 1
var modal1= document.getElementById("myModal1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("myImg1");
var modalImg1 = document.getElementById("img01");
var captionText1 = document.getElementById("caption1");
img1.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText1.innerHTML = this.alt;
}

// close modal when x is clicked
span1.addEventListener("click", function() { 
  modal1.style.display = "none";
})


// modal 2
var modal2 = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}

// close modal when x is clicked
span2.addEventListener("click", function() { 
  modal2.style.display = "none";
})

// modal 3
var modal3 = document.getElementById("myModal3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById("myImg3");
var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption3");
img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
}

// close modal when x is clicked
span3.addEventListener("click", function() { 
  modal3.style.display = "none";
})

// modal 4
var modal4 = document.getElementById("myModal4");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img4 = document.getElementById("myImg4");
var modalImg4 = document.getElementById("img04");
var captionText4 = document.getElementById("caption4");
img4.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
}

// close modal when x is clicked
span4.addEventListener("click", function() { 
  modal4.style.display = "none";
})

// Modal 5
var modal5 = document.getElementById("myModal5");

// Get the image and insert it inside the modal - use its "alt" text as caption
var img5 = document.getElementById("myImg5");
var modalImg5 = document.getElementById("img05");
var captionText5 = document.getElementById("caption5");
img5.onclick = function(){
  modal5.style.display = "block";
  modalImg5.src = this.src;
  captionText5.innerHTML = this.alt;
}

// close modal when x is clicked
span5.addEventListener("click", function() { 
  modal5.style.display = "none";
})