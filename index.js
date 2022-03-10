var dropdown = document.getElementsByClassName("dropdown__btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

document.getElementById("navbar__button").onclick = function(){
var popupMenu = document.getElementById("menu__popup");
  popupMenu.style.display = "block";
};

document.getElementById("close__popup").onclick = function(){
  var popupMenu = document.getElementById("menu__popup");
    popupMenu.style.display = "none";
  };
