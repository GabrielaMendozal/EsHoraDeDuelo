class Card {
    constructor( name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor( name,cost,power,res){
        super( name,cost);
        this.power = power;
        this.resistencia = resistencia;
    }
    attack( target){
        if( target instanceof Unit ) {
            target.resistencia -= this.power;
            console.log(this.name  + " ataca a " + this.name);     // implementa el texto de carta aquí
        } else {
            throw new Error( "Target must be a unit!" );
            }
    }

    getInfo(){
        console.log( `Info de ${this.name}\n Costo: ${this.cost}\n 
        Poder: ${this.power}\n Resistencia: ${this.resistencia}\n`)
    }
}

class Effect extends Unit {
    constructor(name, texto, stat, magnitud, costo) {
    super(name, costo);
    this.texto = texto;
    this.stat = stat.toLowerCase();
    this.magnitud = magnitud;
    }
    play( target ) {
        if( target instanceof Unit ) {
            if(this.magnitud.includes("+")){
                target[this.stat] += monto;
            }
            else if(this.magnitud.includes("-")){
                target[this.stat] -= monto;
            }
            console.log(`${this.texto} aplicado a ${target.name}\n`);
            }
        else {
            throw new Error( "Target must be a unit!" );
        }
    }


}
