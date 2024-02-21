//read Questios
const grupo = `/js/quests/Grupo/Grupo${window.location.search.split('=')[1]}.json`

fetch(grupo)
.then((response) => response.json())
.then((json) => {
    json = json.quests;
    console.log(json)
    const questContainers = document.querySelectorAll(".quest");
    const correctA = document.getElementById("ss")
    var arrayCorrect = []
    var tam = 0
    for(let key in json) {
        if(json.hasOwnProperty(key)){
            tam++;
        }
    }

    for(let i = 0; i < 6; i++){
        let choices = questContainers[i].querySelectorAll('label')
        let index = Math.floor(Math.random() * (tam-i))

        for( elem of json[index].texts.reverse() ){
            let enun = document.createElement("p");
            enun.innerHTML = elem;
            questContainers[i].insertBefore(enun, questContainers[i].children[2]);
        }

        for( let j = 0; j < 5; j++ ){
            choices[j].innerHTML = json[index].choices[j];
        }

        if(json[index].imagem){
            questContainers[i].querySelector('img').src = json[index].imagem
        }

        arrayCorrect.push(json[index].correct);
        json.splice(index, 1);
    }
    correctA.value = arrayCorrect.join()
});


// Pass page, carroussel
var slider = document.getElementById("slider");
var slide = 0;

function changeSlide(e){//main function
    if(e) slide += 20;
    else slide -= 20;
    if(slide == -100) slide = -80
    slider.style.transform = `translateX(${slide}%)`;
}

document.querySelectorAll(".nex").forEach((element)=>{
    element.addEventListener('click', ()=>{changeSlide(0)});
})
document.querySelectorAll(".prev").forEach((element)=>{
    element.addEventListener('click', ()=>{changeSlide(1)});
})


// Read and Check answers
var answerContainer = document.querySelectorAll("form");
var correct = 0;
document.getElementById("final").addEventListener("click", ()=>{     //FUNCIOANDO PERFEITAMENTE
    fetch(grupo)
    .then((response) => response.json())
    .then((json) => {
        let correct = 0;
        const wrong = document.getElementById('wrong');
        const studentContainer = document.getElementById('user');
        const answerExib = document.getElementById('points');
        const correctAnswer = document.getElementById('ss').value.split(','); // correct answers

        for(let i = 0; i < 6; i++){
            if( document.querySelector(`input[name="qt${i+1}"]:checked`)?.value == correctAnswer[i]){ 
                correct++; // questão correta
            }
            else{
                let contain = document.querySelector(`input[name="qt${i+1}"]`).closest('.quest').cloneNode(true); // clona as questões
                contain.querySelector('button')?.remove(); // remove os botões
                contain.querySelector(`input[name="qt${i+1}"]:checked`)?.parentNode.classList.add('wrong-answer'); // destaca as erradas    
                wrong.append(contain); //adiciona na div
            }
        }
        // passando os dados para o resultado
        const nome = document.querySelector(`input[name="nome"]`)?.value;
        const escola = document.querySelector(`input[name="escola"]`)?.value;

        studentContainer.children[0].innerHTML = nome;
        studentContainer.children[1].innerHTML = escola;

        answerExib.children[0].innerHTML = `${correct}/6`;
        answerExib.children[1].innerHTML = `${Math.round((correct/6)*100)}%`;

        const mensage = document.getElementById("mensagem");
        if(correct == 6) {
            document.getElementById("view-wrong").remove()
            mensage.innerHTML = "Meus Parabéns, você conseguiu!";
        }else if(correct > 3){
            mensage.innerHTML = "Quase lá! Tente de novo, você vai conseguir";
        }else if(correct > 1){
            mensage.innerHTML = "Continue estudando, você consegue!";
        }
    })
})


// wrong question appear
document.getElementById("view-wrong").addEventListener('click', ()=>{
    document.getElementById("wrong-container").style.transform = "translateY(0)";
})

// wrong question close
document.getElementById("close-wrong").addEventListener('click', ()=>{
    document.getElementById("wrong-container").style.transform = "translateY(105%)";
})