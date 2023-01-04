function hora(){
  let agora = document.getElementById("agora")
  let horaSistema =  new Date();
  let hora = horaSistema.getHours()
  let minutosSistema = new Date();
  let minutos = minutosSistema.getMinutes();
  let segundosSistema = new Date();
  let segundos = segundosSistema.getSeconds();

  agora.innerHTML = `<H1> ${hora}:${minutos}:${segundos}</H1>`
  agora.style.color = "white"

  if(hora <= 0 || hora < 12){
    agora.innerHTML =  `<H1> ${hora}:${minutos}:${segundos} AM</H1>`
  }else{
    agora.innerHTML =   `<H1> ${hora}:${minutos}:${segundos} PM</H1>`
  }
}
