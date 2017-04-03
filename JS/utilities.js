
//CURRYING
var sorter = function(id){
    const sortByName =  (x,y) => $(x).find( "#" +  id ).text().localeCompare($(y).find( "#" +  id).text() );
    const sortByHeight =  (x,y) => $(x).find( "#" +  id).text() - $(y).find( "#" +  id).text(); 
    return function(){return id == "name" ? sortByName:sortByHeight }
}

const append = function(selector)
{
     return function(componet){ $(selector).append(componet); }
}

//ADDS A EVENT         /  MUTATION

       const showEvo = function(pokemon,e){  
           e.bind("mouseover",function(){
          const i = ( $(this).find("#id").text());
          const getIDS = R.curry((value,idPokemon) => idPokemon.id == value);
          const allEvolutions = getIDS(i);
          const getPictures = x => x.pic;
          const createImgs = element => $("<img>").attr({src:element});
              
          var pictures =  pokemon.filter(allEvolutions).map(getPictures).map(createImgs);
           
          
          $(".evolutionPane").empty();
          $(".evolutionPane").append(pictures);  
 
               
           });
        
           return e;
          
        
    } 






const setMainImage = function(element){
        element.bind("mouseover",function(){
        var mainImage = $(this).find("img").attr("src");
        var palceHolderImg = $("#screenImage").attr("src", mainImage);
        });
        return element;
}

//CREATES A POKEMON//******************************************************************************
const createPokemonRow = function(x){
          var div      = $("<div></div>").attr({
              class:"row"
          });
          var ul       = $("<ul></ul>").appendTo(div);
          var liPic    = $("<li></li>").append(
            $("<img>").attr({
                  class : "poke-icon",
                  src: x.pic
            })).appendTo(ul);
          var liName   = $("<li></li>").append(

           $("<a>" + x.name + "</a>").attr({
             id:"name"
           })

          ).appendTo(ul);
          var liType   = $("<li></li>").append(

           $("<a>" + x.type + "</a>").attr({

            })
          ).appendTo(ul);
    
          var liHeight = $("<li></li>").append(
           $("<a>" + x.height + "</a>").attr({
             id:"height"
            })

          ).appendTo(ul);
    
        var liHeight = $("<li></li>").append(
           $("<a>" + x.id + "</a>").attr({
             id:"id"
            })

          ).appendTo(ul);
        
          return div;
        }

var buttonEvent = (function() {
    return  {
    searchPokemon:function(name,arr)
    {
       try {
           const getPokemon = pokemon => pokemon.name.match(name);
           let pokemon = arr.filter(getPokemon);
           return pokemon[0]; 
           }catch(e) {
             alert("Pokemon not found");
           }        
        }
}
}());


