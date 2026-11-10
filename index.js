const nome = document.getElementById("nome");
const mail = document.getElementById("mail");
const nasc = document.getElementById("nasc");
const curso = document.getElementById("curso");
const tele = document.getElementById("tele");
const form = document.getElementById("form");
const mens = document.getElementById("mens");
const men2 = document.getElementById("men2");
const data = document.getElementById("data");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const hoje = new Date();
    const dia = hoje.getDate();
    const mes = hoje.getMonth() + 1;
    const ano = hoje.getFullYear();
    
    mens.innerHTML = "";

    mens.innerHTML = `O aluno ${nome.value} foi cadastrado com sucesso`;

    men2.innerHTML = `Colégio Estadual do Paraná, ${curso.value}, ${dia}/${mes}/${ano}`
    
    form.reset();
});