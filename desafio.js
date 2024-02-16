# Desafio do Felipao Dio


let xpHeroi = 4899
let nomeHeroi = " "
let nivelHeroi = " "

    if (xpHeroi <= 1000 ) {
    nomeHeroi = "Jiren"
    nivelHeroi = "Ferro" 

    } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nomeHeroi = "Goku"
    nivelHeroi = "Bronze"
  
    } else if (xpHeroi >= 2001 && xpHeroi <= 6000) {
    nomeHeroi = "Vegetto"
    nivelHeroi = "Prata"
     
    } else if (xpHeroi >= 6001 && xpHeroi <= 7000) {
	nomeHeroi = "Gogeta"
	nivelHeroi = "Ouro"
     
    } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
	nomeHeroi = "Bills"
    nivelHeroi = "Platina"
     
    } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
	nomeHeroi = "Whis"
    nivelHeroi = "Ascendente"
    
    } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
 	nomeHeroi = "Sumo Sacerdote"
    nivelHeroi = "inmotal"
    
    } else if (xpHeroi >= 10001) {
    nomeHeroi = "Zen'oh"
    nivelHeroi = "Radiante" 
	} 
    
console.log("O heroi de nome " + nomeHeroi + " est� no nivel " + 

nivelHeroi + " e possue uma experiencia de " + xpHeroi + " pontos ") 