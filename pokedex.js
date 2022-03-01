
$(document).ready(function(){
     
     var pokemon  ;

     $('#buscar').click(function(){
        pokemon =  $('#pokedex').val();

        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(function(response) {
            
         var poke  =   document.getElementById('pokemon')

         poke.setAttribute('src', `${response.data.sprites.front_default}`)
          
         document.getElementById('name-pokemon').textContent = response.data.species.name
         document.getElementById('card').style.display = 'block'
         getBack(response.data)
            
     });
   });

   function getBack(pokemon){
      console.log(pokemon)
      $('#right').click(function(){
        document.getElementById('pokemon-modal').setAttribute('src', `${pokemon.sprites.back_default}`) 
      })

      $('#left').click(function(){
         document.getElementById('pokemon-modal').setAttribute('src', `${pokemon.sprites.front_default}`) 
      })


      $('#information').click(function(){
          document.getElementById('type').style.display = 'block'
          document.getElementById('pokemon-modal').setAttribute('src', `${pokemon.sprites.front_default}`) 
          document.getElementById('tipo').textContent = pokemon.types[0].type.name
          document.getElementById('life').textContent = pokemon.stats[0].base_stat
          document.getElementById('attack').textContent = pokemon.moves[26].move.name
      })

      $('.close').click(function(){
         document.getElementById('type').style.display = 'none' 
      })
   }
})

