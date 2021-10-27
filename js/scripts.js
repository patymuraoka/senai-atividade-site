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
