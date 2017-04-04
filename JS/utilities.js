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
const setMainImage = function(element){//change image name
        element.bind("mouseover",function(){
        var mainImage = $(this).find("img").attr("src");
        var palceHolderImg = $("#screenImage").attr("src", mainImage);//change name #screenp  :   screenImage
        });
        return element;
}

//CREATES A POKEMON//******************************************************************************
const createPokemonRow = function(x){
    
    var div  = $("<div></div>").attr({ class:"row" });
    var ul   = $("<ul></ul>").appendTo(div);
    var img  = $("<img>").attr({ class : "poke-icon",src: x.pic});
    var name = $("<a>" + x.name + "</a>").attr({id:"name"});
    var type = $("<a>" + x.type + "</a>");    
    var height = $("<a>" + x.height + "</a>").attr({id:"height" });
    var id = $("<a>" + x.id + "</a>").attr({ id:"id" });
    
    var components = function(){
        var component = [...arguments];
        return component;
    }
    
    var component = components(img,name,type,height,id);
    
    var list = component.map(function(element){
       return $("<li></li>").append(element);
    });

    ul.append(list);
    div.append(ul);

         
         /* var liPic = $("<li></li>").append(
            $("<img>").attr({
                  class : "poke-icon",
                  src: x.pic
            })).appendTo(ul);*/
            
         /*var liName = $("<li></li>").append(
           $("<a>" + x.name + "</a>").attr({
             id:"name"})
          ).appendTo(ul);*/
    
         /*var liType = $("<li></li>").append(
          $("<a>" + x.type + "</a>"));*/

         /* var liHeight = $("<li></li>").append(
           $("<a>" + x.height + "</a>").attr({
            id:"height" })
            ).appendTo(ul);*/
    
    
  /*      var liId = $("<li></li>").append(
           $("<a>" + x.id + "</a>").attr({ id:"id" })).appendTo(ul);*/

           return div;
        }




const evolutionHandle = function(pokemon,row)
{
        row.bind("mouseover",function(){
          const id = ( $(this).find("#id").text());
          const getIDS = R.curry((id,idPokemon) => idPokemon.id == id);
          const allEvolutions = getIDS(id);
          const getPictures = x => x.pic;
          const createImgs = src => $("<img>").attr({src:src});
              
          var pictures = pokemon.filter(allEvolutions).map(getPictures).map(createImgs);
           
          $(".evolutionPane").empty();
          $(".evolutionPane").append(pictures); 
        
    
    });
    
        return row;
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


