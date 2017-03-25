//change name to the file in index.html

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
const setMainImage = element =>{//change image name
        element.bind("mouseover",function(){
          var mainImage = $(this).find("img").attr("src");
          var palceHolderImg = $("#screenImage").attr("src", mainImage);//change name #screenp  :   screenImage
        });
        return element;
}

//CREATES A POKEMON//******************************************************************************
const createPokemonRow = x =>{//change the name of the funcion in the html 
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
/*
const searchPokemon = function(name,array)///insert this code in index.html
{ 
	try{
	      let found = array.filter(pokemon => pokemon.name.match(str));
	      return found[0];
          }catch(e)
                {
                    alert("Pokemon not found");
                } 
}
*/

var buttonEvent = (function()/// change this function name in index.html
{


    return  {

     searchPokemon:function(str,arr)
        {
            try{
                const getPokemon = pokemon => pokemon.name.match(str);
                let pokemon = arr.filter(getPokemon);
                return pokemon[0]; 
            }catch(e)
                {
                    alert("Pokemon not found");
                }        
        }

    }

}());


