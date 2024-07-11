export default class CL_salon {
    constructor(){
        this.contest = 0;
        this.contaprob = 0;
        this.contreprob = 0;
        this.acumnota = 0.0;
    }
    procesarestudiante(est){
        this.contest++;
        if(est.nota>=48)
            this.contaprob++;
        else
        this.contreprob++;
    this.acumnota+=est.nota;
    }
    promedio(){
        return this.acumnota/this.contest
    }
    devolveraprobados(){
        return this.contaprob;
    }
    devolverreprobados(){
    return this.contreprob;
    }
}