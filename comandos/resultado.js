var erros = Number(localStorage.getItem('erros'));
var acertos = Number(localStorage.getItem('acertos'));
var aproveitamento = document.querySelector('#aproveitamento');
var resultadoQuiz = document.querySelector('#resultadoQuiz');
var resultadoErros = document.querySelector('#resultadoErros');

var total = acertos + erros;
var porcentagem = (acertos / total) * 100;




resultadoQuiz.textContent = 'Acertos: ' + acertos;
resultadoErros.textContent = 'Erros: ' + erros;
aproveitamento.textContent = `${porcentagem}%`;

if(porcentagem < 50){
    aproveitamento.style.color = 'red';
}else if(porcentagem >= 50 && porcentagem <= 70){
    aproveitamento.style.color = 'yellow';    
} else{
    aproveitamento.style.color = 'green';
}
