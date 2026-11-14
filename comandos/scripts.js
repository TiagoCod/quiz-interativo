var perguntas = document.querySelectorAll('.perguntas .alternativa');
var avancar = document.querySelector('#avancar');
var retornar = document.querySelector('#retornar');
var progresso = document.querySelector('#progresso');
var tituloPergunta = document.querySelector('#pergunta');
//-----------------------------------------------------------

var questoes = [{ 
    
    enunciado: 'Qual linguagem é utilizada para manipular o DOM?',
    alternativas: ['Python', 'JavaScript', 'Java', 'C++'],
    correta: 'JavaScript',
    respostaUsuario: null
}, 
{
    enunciado: 'Qual elemento HTML é utilizado para criar um hiperlink?',
    alternativas: ['<link>', '<href>', '<a>', '<url>'],
    correta: '<a>',
    respostaUsuario: null
},
{
    enunciado: 'Qual estrutura é utilizada para executar um bloco de código enquanto uma condição for verdadeira?',
    alternativas: ['if', 'while', 'switch', 'return'],
    correta: 'while',
    respostaUsuario: null
}
,
{
    enunciado: 'Qual comando é utilizado para enviar alterações locais para um repositório remoto?',
    alternativas: ['Git Add', 'Git Commit', 'Git Push', 'Git Pull'],
    correta: 'Git Push',
    respostaUsuario: null
}
,
{
    enunciado: 'Qual comando SQL é utilizado para consultar dados de uma tabela?',
    alternativas: ['SELECT', 'UPDATE', 'INSERT', 'DELETE'],
    correta: 'SELECT',
    respostaUsuario: null
}
,
{
    enunciado: 'Qual empresa desenvolveu o sistema operacional Windows?',
    alternativas: ['Samsung', 'Apple', 'Microsoft', 'Google'],
    correta: 'Microsoft',
    respostaUsuario: null
}
,
{
    enunciado: 'Qual destes dispositivos é utilizado principalmente para armazenar arquivos e documentos?',
    alternativas: ['Teclado', 'Mouse', 'SSD', 'Monitor'],
    correta: 'SSD',
    respostaUsuario: null
}
,
{
    enunciado: 'Qual linguagem de programação é bastante conhecida por sua utilização em inteligência artificial e análise de dados?',
    alternativas: ['SQL', 'Python', 'CSS', 'HTML'],
    correta: 'Python',
    respostaUsuario: null
}
,
{
    enunciado: 'O que é a internet?',
    alternativas: ['Um sistema operacional', 'Uma rede mundial de computadores', 'Um dispositivo eletrônico', 'Um programa de edição'],
    correta: 'Uma rede mundial de computadores',
    respostaUsuario: null
}
,
{
    enunciado: 'Qual é a principal finalidade do Git no desenvolvimento de software?',
    alternativas: ['Controlar versões do código', 'Criar interfaces gráficas', 'Hospedar sites na internet', 'Gerenciar bancos de dados'],
    correta: 'Controlar versões do código',
    respostaUsuario: null
}

];

var perguntaAtual = 0;
var acertos = 0;
var erros = questoes.length - acertos;

//-----------------------------------------------------------

tituloPergunta.textContent = questoes[perguntaAtual].enunciado;

progresso.textContent = `Pergunta ${perguntaAtual + 1} de ${questoes.length} perguntas`;


perguntas.forEach(function(nome, indice) {

    nome.textContent = questoes[perguntaAtual].alternativas[indice];


    nome.addEventListener('click', function() {

            if( questoes[perguntaAtual].respostaUsuario === null){
                
             if(nome.textContent === questoes[perguntaAtual].correta){
                    acertos++;
                nome.style.transition = 'background-color 0.3s ease';
            nome.style.backgroundColor = 'green'
            
            }else{
            nome.style.transition = 'background-color 0.3s ease';
            nome.style.backgroundColor = 'red';
           
        }
             questoes[perguntaAtual].respostaUsuario = nome.textContent;
             

        }
    })
        
});



//-----------------------------------------------------------

avancar.addEventListener('click', function() {


    if(questoes[perguntaAtual].respostaUsuario === null){
        alert('Preencha a alternativa para finalizar o quiz')
        return
    }

         if(perguntaAtual === questoes.length - 1){
            erros = questoes.length - acertos;
                localStorage.setItem('acertos', acertos);
                localStorage.setItem('erros', erros);

                window.location.href = 'tela_final.html';
        }else{
            perguntaAtual++;

            tituloPergunta.textContent = questoes[perguntaAtual].enunciado;

     progresso.textContent = `Pergunta ${perguntaAtual + 1} de ${questoes.length} perguntas`;

    perguntas.forEach(function(nome, indice) {
        nome.textContent = questoes[perguntaAtual].alternativas[indice];

        nome.style.backgroundColor = 'white'


        if(questoes[perguntaAtual].respostaUsuario === nome.textContent){

            if(questoes[perguntaAtual].respostaUsuario === questoes[perguntaAtual].correta){
                nome.style.backgroundColor = 'green'
            }else{
                nome.style.backgroundColor = 'red'
            }
            
        }else{
             
          nome.style.backgroundColor = 'white'
        }
    });
    }

        });


retornar.addEventListener('click', function() {

    if(perguntaAtual < 0){
        perguntaAtual++;
    }else{
        if(perguntaAtual > 0){
            perguntaAtual--;
        }
        
        tituloPergunta.textContent = questoes[perguntaAtual].enunciado;

    progresso.textContent = `Pergunta ${perguntaAtual + 1} de ${questoes.length} perguntas`;

    perguntas.forEach(function(nome, indice) {
        nome.textContent = questoes[perguntaAtual].alternativas[indice];
    });
    };
    

    perguntas.forEach(function(nome) {

        nome.style.backgroundColor = 'white'

        if(questoes[perguntaAtual].respostaUsuario === nome.textContent){

            if(questoes[perguntaAtual].respostaUsuario === questoes[perguntaAtual].correta){

                nome.style.backgroundColor = 'green'
            }else{
                nome.style.backgroundColor = 'red'
            }
            
        }else{
             
          nome.style.backgroundColor = 'white'
        }

       

    });

    
   
});


//-----------------------------------------------------------



