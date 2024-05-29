function calculateDate(){
  const data = document.getElementById("data do usuario");
    const now = new Date();
    const Calculadora = now.getTime() - new Date(data.value).getTime();
    console.log(Calculadora);
    const result= (Math.floor(Calculadora / (1000 * 60 * 60 * 24 * 365.25)));
    const Resultados = document.getElementById("resposta");
    const span = document.createElement("span");
    Resultados.appendChild(span)
    span.innerText = result 
}