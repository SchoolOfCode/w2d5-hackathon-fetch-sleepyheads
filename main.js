
let pokeImage = document.querySelector("#pokemonPic")
let pokeName = document.querySelector("#pokemon-name")
let pokedexNo = document.querySelector("#pokedexNo")
let pokeType = document.querySelector("#pokemon-type")
let pokeHeight = document.querySelector("#pokeHeight")
let pokeWeight = document.querySelector("#pokeWeight")
let pokeHp = document.querySelector("#pokeHp")
let pokeAttack = document.querySelector("#pokeAttack")
let pokeDefense = document.querySelector("#pokeDefense")
let pokeSpecialAttack=document.querySelector("#pokeSpecial-attack")
let pokeSpecialDefense=document.querySelector("#pokeSpecial-defense")
let pokeSpeed=document.querySelector("#pokeSpeed")


        
    async function getPokemon() {
        let id = Math.floor(Math.random() * 1118) + 1;
        console.log(id);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        let pokemon = await response.json();
        console.log(pokemon.name, pokemon.id, pokemon.types[0].type.name, pokemon.sprites.other.dream_world.front_default);
        pokeImage.src = pokemon.sprites.other.dream_world.front_default;
        pokeName.innerHTML = pokemon.name;
        pokeType.innerHTML =  pokemon.types[0].type.name;
        pokedexNo.innerHTML = "pokedex No: " + pokemon.id;
        pokeHeight.innerHTML = "Height: " + pokemon.height;
        pokeWeight.innerHTML = "Weight: " + pokemon.weight;
        pokeHp.innerHTML = "Hp: " + pokemon.stats[0].base_stat;
        pokeAttack.innerHTML = "Attack: " + pokemon.stats[1].base_stat;
        pokeDefense.innerHTML = "Defense: " + pokemon.stats[2].base_stat;
        pokeSpecialAttack.innerHTML = "Special Attack: " + pokemon.stats[3].base_stat;
        pokeSpecialDefense.innerHTML = "Special Defense: " + pokemon.stats[4].base_stat;
        pokeSpeed.innerHTML = "Speed: " + pokemon.stats[5].base_stat;

    }
    getPokemon();
    
    // pokem.stats.map(([
    //     stat.name,
    //     stat.
    // ]))




document.querySelector("#button").addEventListener("click", getPokemon);



        
        