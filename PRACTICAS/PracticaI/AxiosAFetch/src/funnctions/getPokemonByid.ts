//const {httpClient}=require("./plugin")

import { IPokemon } from "../interfaces/IPokemon"
import {httpClients} from "../plugins"


export const getPokemon=async(idPokemon:String):Promise<IPokemon>=>{
   const url=`https://pokeapi.co/api/v2/pokemon/${idPokemon}`
    const pokemon= await httpClients.get<IPokemon>(url)
    return pokemon;
}

