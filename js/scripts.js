function menu() {
    document.getElementById("myDropdown").classList.toggle("show");
}    
  
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    let myDropdown = document.getElementById("myDropdown");
  if (myDropdown.classList.contains('show')) {
    myDropdown.classList.remove('show');
    }
  }
}


function enviar(){
  let nome = document.getElementById("nomeid");
  let fone = document.getElementById("foneid");
  let email = document.getElementById("emailid");
  let text = document.getElementById("textid");
  if (nome.value != "") {
    alert('Obrigado Sr(a). ' + nome.value + ' Os seus dados e sua mensagem foram encaminhados com sucesso.');
  }
  else{
    alert("ERRO! Todos os campos devem ser preenchidos!");
  }
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}