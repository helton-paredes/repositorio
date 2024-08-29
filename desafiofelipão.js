let nomeHeroi = "solar";
let experienciaDoHeroi = 9000;
let nivelDoHeroi = "platina"

switch (true) {
    case experienciaDoHeroi >= 0 && experienciaDoHeroi <= 1000:
        nivelDoHeroi = "ferro";
        break; 
    case experienciaDoHeroi >= 1001 && experienciaDoHeroi <= 2000:
        nivelDoHeroi = "bronze";
        break;
    case experienciaDoHeroi >= 2001 && experienciaDoHeroi <= 5000:
        nivelDoHeroi = "prata";
        break;
    case experienciaDoHeroi >= 5001 && experienciaDoHeroi <= 7000:
        nivelDoHeroi = "ouro";
        break;
    case experienciaDoHeroi >= 7001 && experienciaDoHeroi <= 8000:
        nivelDoHeroi = "platina";
        break;    
    case experienciaDoHeroi >= 8001 && experienciaDoHeroi <= 9000:
        nivelDoHeroi = "ascendente";
        break;
    case experienciaDoHeroi >= 9001 && experienciaDoHeroi <= 10000:
        nivelDoHeroi = "imortal";
        break;
    case experienciaDoHeroi > 10001:
        nivelDoHeroi = "radiante";
        break;
}

console.log("O herói de nome " + nomeHeroi + " está no nível " + nivelDoHeroi + " com " + experienciaDoHeroi + " de experiência.");