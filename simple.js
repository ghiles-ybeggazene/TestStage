Array.prototype.generateArray = function(hair,skinColor,language,gender,nbr){
   tab = []
   for(i=0;i<nbr;i++)
   {
   	   var temp = {
   	   		hair:hair[Math.floor(Math.random() * hair.length)]
			, skinColor:skinColor[Math.floor(Math.random() * skinColor.length)]
			, language:language[Math.floor(Math.random() * language.length)]
			, gender : gender[Math.floor(Math.random() * gender.length)]
		}; 
   	   tab.push(temp);
   }
   return tab;
}

Array.prototype.removeClone = function(arr){
   
   if (arr instanceof Array) {
	  
	let unique_array = []
    for(let i = 0;i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i])
        }
    }
    return unique_array


	} else {
	  alert("ERREUR : la valeur passée en paramétre n'est pas un tableau ");
	}
}


// test
//generateArray(['Hblack','Hwhite'],['Sblack','Swhite'],['fr','ar'],['m','f'],3)
//removeClone(["algeria","france","italy","espagne","algeria"])
// removeClone("algeria")