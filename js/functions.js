//Variáveis de controle do toggle
var showHiddenText = false;
var showResponse = false;

//Função que mostra os textos do resumo
function showText(){
    let seeMore = document.querySelector('.see-more')
    let dots = document.getElementById('dots')
    let hiddenText = document.getElementById('hidden-text')
    let area = document.querySelector('.resumo__body')
    
    showHiddenText = !showHiddenText
    

    if (showHiddenText === true){
        seeMore.style.display = 'none'
        hiddenText.style.display = 'block'
        dots.style.display = 'none'
        area.style.cursor = 'pointer'
        setTimeout(()=>{
            area.addEventListener('click', showText)
        },250)
        

    }else{
        area.removeEventListener('click', showText)
        seeMore.style.display = ''
        hiddenText.style.display = 'none'
        dots.style.display = ''
        area.style.cursor = 'default'
    }

    
}
//Função que mostra a div criadora de um novo tópico
function createTopic(){
    let discussoes = document.querySelector('.discussoes__body')
    let addTopic = document.querySelector('.add-topic')
    discussoes.style.display = 'none'
    addTopic.style.display = 'block'
}
//Função que envia o tópico
function sendTopic(){
    let addTopic = document.querySelector('.add-topic')
    let newSubject = document.getElementById('new-subject')
    let topicSent = document.querySelector('.discussoes-sent__body')
    newSubject.style.display = 'block'
    addTopic.style.display = 'none'
    topicSent.style.display = 'flex'
}
//Função que abre novamente o editor para escrever outro tópico
function writeAgain(){
    let newSubject = document.getElementById('new-subject')
    let addTopic = document.querySelector('.add-topic')
    let input = document.getElementById('add-topic__input')
    let topicSent = document.querySelector('.discussoes-sent__body')
    editor.setContents([{ insert: '\n' }]);
    input.value = ''
    newSubject.style.display = 'none'
    addTopic.style.display = 'block'
    topicSent.style.display = 'none'
}
//Função que mostra respostas dos autores e coautores
function showResponses(){
    let hiddenMessages = document.querySelector('.assunto__hidden')
    showResponse = !showResponse

    if(showResponse === true){
        hiddenMessages.style.display = 'block'
    }else{
        hiddenMessages.style.display = 'none'
    }
}
//Criação da instância do editor de texto
var editor = new Quill('.text-editor', {
    modules: {
        toolbar: ['bold', 'italic']
    },
    placeholder: '',
    theme: 'snow'
});