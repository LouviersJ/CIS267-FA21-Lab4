const app= Vue.createApp(
    {
    data(){
        return{
        allPokemon: [{id:1, name:"bulbasaur", type:"grass"}, {id:1, name:"ivysaur", type:"grass"} ],
        partyPokemon: [{id:1, name:"ivysaur", type:"grass"}],
        filteredPokemon: [],
        maxPartySize: 6
        };

    },
    methods: {
        loadPokemon() {
            //load all pokemon from API and save into all pokemon
        },
        filterPokemon() {
            //set the filtered pokemon to matching pokemon based on search query
        },
        addPokemonToParty(pokemon) {

        },
        removePokemonFromParty(pokemon) {

        },
        pokemonTypeString(pokemon){
            if(pokemon.types.length > 1) {
                return '${pokemon.types.type.name}';
            }
        }

    }
}).mount("#app");
html
