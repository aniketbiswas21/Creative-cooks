
var array= new Array();
var food;
function access(){
    var str=document.getElementById("text").value;
    array=str.split(',');
//console.log(array);
const l=array.length;
const foodData=[
    {
        type: "Tomato Peach Salad",
        ingredient1: "tomato",
        ingredient2: "peach",
        ingredient3: "onion",
    },
    {
        type: "Watercress-Fruit Salad",
        ingredient1: "watermelon cubes",
        ingredient2: "watercress",
        ingredient3: "peach wedges",
    } ,
    {
        type: "BBQ potato Salad",
        ingredient1: "potato",
        ingredient2: "bbq sauce",
        ingredient3: "onion",
    },
    {
        type: "Creole Green beans salad",
        ingredient1: "creole mustard",
        ingredient2: "green beans",
        ingredient3: "onion",
    },
     {
        type: "Green cucumber salad",
        ingredient1: "cucumber",
        ingredient2: "kalamata olive ",
        ingredient3: "onion",
    },
 
    {
        type: "Oranges with mozzarella",
        ingredient1: "orange",
        ingredient2: "mozzarella",
        ingredient3: "basil",
    },
    
    {
        type: "Macaroni salad",
        ingredient1: "mayo",
        ingredient2: "macaroni",
        ingredient3: "onion",
    },
    
    {
        type: "Tuna salad",
        ingredient1: "tuna",
        ingredient2: "tomato",
        ingredient3: "olives",
    },
    
    {
        type: "Egg salad with beans",
        ingredient1: "beans",
        ingredient2: "boiled eggs",
        ingredient3: "radishes",
    },
    
{
        type: "Beet Salad",
        ingredient1: "cheese",
        ingredient2: "beets",
        ingredient3: "onion",
    }
   ];
//console.log(foodData[0].type);
var num=0;
 for(var j=0;j<10;j++){
     num=0;
 for(var k=0;k<l;k++){
     if(array[k]==foodData[j].ingredient1||array[k]==foodData[j].ingredient2||array[k]==foodData[j].ingredient3||array[k]==foodData.ingredient4){
        num++;
     }
 }
 if(num+1==Object.keys(foodData[j]).length){
     console.log(foodData[j].type);
     food=foodData[j].type;
 }
 }
 var element = document.querySelector(".alert");
  element.className="alert1";
  element.innerHTML=`Hurray! You can make ${food}.`;
 
    var str = "Recipe";
  var result = str.link(`https://www.youtube.com/results?search_query=${food}`);
  document.getElementById("demo").innerHTML = result;}
 
 //console.log(num);
 
 
//console.log(Object.keys(foodData[1]))
// for(let i=0;i<Object.keys(foodData[1]).length;i++){
//     console.log(Object.)
// }
// }
 

