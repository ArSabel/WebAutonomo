import { getPokemon } from "./funnctions"


// getPokemon  ("10").then((pokemon)=>{
//     console.log(pokemon.name)
// })

(async()=>{
    const pokemon =await getPokemon("10")
    console.log(pokemon.abilities[1].ability.name)
}
)()