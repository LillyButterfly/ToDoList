//Missão Progrmador 5D
let input = document.getElementById("input-principal");
let buttonadd = document.getElementById("botao-add");
let tarefa = document.getElementById("tarefa-nome");
let listaCompleta = document.getElementById("tarefas")

let arrayDeTarefas =  [];



function mostarTarefa(){
    let novaLi = "";

    arrayDeTarefas.forEach((tarefa, index) => {
       
       novaLi = novaLi + 
       `<li class="item-tarefa ${ tarefa.concluida == true && "concluido" }">
        <button class="btnconcluido" onclick="concluirTarefa(${index})"><span class="material-symbols-outlined">done</span></button>
        <p class="nome-tarefa ${ tarefa.concluida == true && "concluido" }" id="tarefa-nome">${tarefa.tarefa}</p>
        <button class="btnexcluir" onclick="deletarTarefa(${index})"><span class="material-symbols-outlined">delete</span></button> 
    </li>`
    })

    listaCompleta.innerHTML = novaLi;

    localStorage.setItem("lista", JSON.stringify(arrayDeTarefas));
}

function adicionarTarefa(){
    
    if(input.value){
        arrayDeTarefas.push({
            tarefa: input.value,
            concluida: false
        }); 
    }else{
        alert("Digite uma tarefa");
    }
    
    input.value = "";
    mostarTarefa();
 }
 
function deletarTarefa(index){
    arrayDeTarefas.splice(index, 1);

    mostarTarefa();
}
 
function concluirTarefa(index){
    arrayDeTarefas[index].concluida = !arrayDeTarefas[index].concluida

    mostarTarefa()
}

function recarregarTarefa(){
    let minhasTarefas = localStorage.getItem("lista")

    if(minhasTarefas){
        arrayDeTarefas = JSON.parse(minhasTarefas)

        mostarTarefa()
    }
    
}

function adicionarPeloEnter(teclas){
    if(teclas.key === "Enter"){
        adicionarTarefa()
    }
}

 
buttonadd.addEventListener("click", adicionarTarefa);

document.addEventListener("keypress", adicionarPeloEnter);