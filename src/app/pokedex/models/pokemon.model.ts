export class Pokemon {
    id : number;
    name : string;
    weight : number;
    height : number;
    sprites : any;

    constructor(){

    }

    fromJson(json : any){
        this.id = json.id;
        this.name = json.name;
        this.weight = json.weight;
        this.height = json.height;
        this.sprites = json.sprites;
    }

}