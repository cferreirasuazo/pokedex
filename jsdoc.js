

//CURRY
var sorter = function(a){
    const var1 =  (x,y) => $(x).find( "#" +  a ).text().localeCompare(   $(y).find( "#" +  a).text()      );
    const var2 =  (x,y) => $(x).find( "#" +  a).text() - $(y).find( "#" +  a).text(); 

  return function(){
     return (a == "name")
          ? var1
          : var2
          
  }

}

const createApped = function(a)
{
  return function(arr){
      $(a).append(arr);
  }
}
//ADDS A EVENT         /  MUTATION
const setDisplay = x =>{
        x.bind("mouseover" ,function(){
          var img = $(this).find("img").attr("src");
          var plc = $("#screenp").attr("src", img);

        });

    return x;
}

//CREATES A POKEMON
const createPoke = x =>{
          var div      = $("<div></div>").attr({
              class:"row"
          });
          var ul       = $("<ul></ul>").appendTo(div);
          var liPic    = $("<li></li>").append(
            $("<img>").attr({
                  class : "poke-icon",
                  src: x.pic
            })
          ).appendTo(ul);
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
       
var buttonEvent = (function()
{

     console.log("Inside buttonEvent");
    return  {

     searchPokemon:function(str,arr)
        {
            try{
                const getPokemon = x => x.name.match(str);
                let pokemon = arr.filter(getPokemon);
                return pokemon[0]; 
            }catch(e)
                {
                    alert("Pokemon not found");
                }
        

        }

    }

}());


