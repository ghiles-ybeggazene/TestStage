let hair=['noir','brun','chatain','blond','roux'];
let skinColor=['brun','brun-fonce','blanc'];
let langage =['espagnol','francais','anglais','kabyle'];
let gender =['Male','Femelle'];


Array.prototype.generateArray = function(hair,skinColor,language,gender,nbr){
   tab = []
   for(i=0;i<nbr;i++)
   {
	   // on genere aleatoirement
   	   var temp = {
   	   		hair:hair[Math.floor(Math.random() * hair.length)]
			, skinColor:skinColor[Math.floor(Math.random() * skinColor.length)]
			, language:language[Math.floor(Math.random() * language.length)]
			, gender : gender[Math.floor(Math.random() * gender.length)]
		}; 
	   //on insert dans le tableau tab
   	   tab.push(temp);
   }
   return tab;
}

console.log(Array.prototype.generateArray(hair,skinColor,langage,gender,5));;




Array.prototype.removeClone = function(tab){
   if (tab instanceof Array) {                        //on verifie si c'est un tableau
	let new_array = []                               //on crée un tableau vide 
    for(let i = 0;i < tab.length; i++){         //on parcours le tableau inseree 
    if(new_array.indexOf(tab[i]) == -1){   //on verifie si la valeur n'est pas dans le nouveau tableau et on l'ajoute, sinon on l'ajoute pas 
            new_array.push(tab[i])            //on insere le tableau donnee par l'utilisateur dans notre tableau 
        }
    }
    return new_array


	} else {        //message d'alerte
		console.log("ERREUR : la valeur passee en parametre n'est pas un tableau");
	}
}

 console.log(Array.prototype.removeClone([75,94,75,93,91,94]));
console.log(Array.prototype.removeClone("algeria"));