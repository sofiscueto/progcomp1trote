function calcular(){
        // vamos criar duasvariáveis
        // JS as variáveis não possuem tipo
    let mascote, homenagem, kit, suplemento, sangue, soma, equipe, arroz5, arroz1, feijao2, feijao1, macarrao, oleo, leite
        // recupera o valo do mascote digitado pelo usuário
    mascote = Number(document.getElementById("mascote").value)
        // recupera o valo da homenagem digitado pelo usuário
    homenagem = Number(document.getElementById("homenagem").value)
        // recupera o valor de kits digitado pelo usuário
    kit = Number(document.getElementById("kit").value)
        // recupera o valor de suplemento digitado pelo usuário
    suplemento = Number(document.getElementById("suplemento").value)
        // recupera o valor de doação de sangue digitado pelo usuário
    sangue = Number(document.getElementById("sangue").value)
        // recupera o valor do arroz de 5kg avulso digitado pelo usuário
    arroz5 = Number(document.getElementById("arroz5").value)
        
    arroz1 = Number(document.getElementById("arroz1").value)
        
    feijao2 = Number(document.getElementById("feijao2").value)
        
    feijao1 = Number(document.getElementById("feijao1").value)
       
    macarrao = Number(document.getElementById("macarrao").value)

    leite = Number(document.getElementById("leite").value)
       
    oleo = Number(document.getElementById("oleo").value)


    
    // calcular a soma parcial
    soma = mascote + homenagem + (arroz5*5) + arroz1 + (feijao2*2) + feijao1 + (macarrao*0.5) + (leite*2) + oleo
    //vamos calcular a pontuação  considerando metas de kit, suplementos e sangue
    equipe = document.getElementById("equipe").value
    if (equipe == "Laranja"){
        if (kit >= 106 && suplemento >=53){
            soma = soma + 5000 + ((kit-106)*30) + ((suplemento-53)*15)
        }
        else if (kit >= 85 && suplemento >=42){
            soma = soma + 4000 + ((kit-85)*30) + ((suplemento-42)*15)
        }
        else if (kit >= 53 && suplemento >=27){
            soma = soma + 2500 + ((kit-53)*30) + ((suplemento-27)*15)
        }
        else if (kit >= 21 && suplemento >=11){
            soma = soma + 1000 + ((kit-21)*30) + ((suplemento-11)*15)
        }
        if (sangue >= 53 ){
            soma = soma + 2500 + ((sangue - 53) * 20)
        }
        else{
            soma = soma + (sangue * 20)
        }
    }
    else if (equipe == "Preta"){
        if (kit >= 104 && suplemento >=52){
            soma = soma + 5000 + ((kit-104)*30) + ((suplemento-52)*15)
        }
        else if (kit >= 83 && suplemento >=42){
            soma = soma + 4000 + ((kit-83)*30) + ((suplemento-42)*15)
        }
        else if (kit >= 52 && suplemento >=26){
            soma = soma + 2500 + ((kit-52)*30) + ((suplemento-26)*15)
        }
        else if (kit >= 21 && suplemento >=10){
            soma = soma + 1000 + ((kit-21)*30) + ((suplemento-10)*15)
        }
        if (sangue >= 52 ){
            soma = soma + 2500 + ((sangue - 52) * 20)
        }
        else{
            soma = soma + (sangue * 20)
        }
    }
    else if (equipe == "Roxa"){
        if (kit >= 105 && suplemento >=53){
            soma = soma + 5000 + ((kit-105)*30) + ((suplemento-53)*15)
        }
        else if (kit >= 54 && suplemento >=42){
            soma = soma + 4000 + ((kit-54)*30) + ((suplemento-42)*15)
        }
        else if (kit >= 53 && suplemento >=27){
            soma = soma + 2500 + ((kit-53)*30) + ((suplemento-27)*15)
        }
        else if (kit >= 21 && suplemento >=11){
            soma = soma + 1000 + ((kit-21)*30) + ((suplemento-11)*15)
        }
        if (sangue >= 53 ){
            soma = soma + 2500 + ((sangue - 53) * 20)
        }
        else{
            soma = soma + (sangue * 20)
        }
    }
    else if (equipe == "Verde"){
        if (kit >= 89 && suplemento >=45){
            soma = soma + 5000 + ((kit-89)*30) + ((suplemento-45)*15)
        }
        else if (kit >= 41 && suplemento >=36){
            soma = soma + 4000 + ((kit-41)*30) + ((suplemento-36)*15)
        }
        else if (kit >= 45 && suplemento >=23){
            soma = soma + 2500 + ((kit-45)*30) + ((suplemento-23)*15)
        }
        else if (kit >= 18 && suplemento >=9){
            soma = soma + 1000 + ((kit-18)*30) + ((suplemento-9)*15)
        }
        if (sangue >= 45 ){
            soma = soma + 2500 + ((sangue - 45) * 20)
        }
        else{
            soma = soma + (sangue * 20)
        }
    }
    else{
        if (kit >= 92 && suplemento >=46){
            soma = soma + 5000 + ((kit-92)*30) + ((suplemento-46)*15)
        }
        else if (kit >= 74 && suplemento >=37){
            soma = soma + 4000 + ((kit-74)*30) + ((suplemento-37)*15)
        }
        else if (kit >= 46 && suplemento >=23){
            soma = soma + 2500 + ((kit-46)*30) + ((suplemento-23)*15)
        }
        else if (kit >= 18 && suplemento >=9){
            soma = soma + 1000 + ((kit-18)*30) + ((suplemento-9)*15)
        }
        if (sangue >= 46 ){
            soma = soma + 2500 + ((sangue - 46) * 20)
        }
        else{
            soma = soma + (sangue * 20)
        }
    }
    
        //retorna o valor ao html
        //template string
    document.getElementById("soma").innerHTML = `A soma é ${soma}`
}

