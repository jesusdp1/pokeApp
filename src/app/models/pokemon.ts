import { PokemonAbility } from "./pokemonAbility";
import { PokemonForm } from "./pokemonForm";
import { PokemonType } from "./pokemonType";

export class Pokemon {
	
    id: number = 0;
    name: string = "";
    height: number = 0;
    isDefault: boolean = true;
    weight: number = 0;
    abilities: PokemonAbility[] =[];
    image: PokemonForm = new PokemonForm;
    types: PokemonType[] = [];
    description: string = "";
    evolutions: string[] = [];
    message: string= "";


    
	    
}
