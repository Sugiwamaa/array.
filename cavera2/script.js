// o que são vetores ou arrays

//como declarar um array 

        let array = ['string',1, true];

    //deve ser declarado entre colchetes "[]"

        console.log(array);

 // como um array pode guardar diferentes valores incluse 
    // outros arrays
    // ex: let array = ['string, 1, true,['array1'],['array2']];

        // como acessar o indice de um array
        console.log(array[0]);

    //manipula um array
    // foreach - realiza uma função para item do array
        array.forEach(function(item,index){console.log(item, index);});

    //push - add item no final da array
        array.push('novp,item');
        console.log(array);

    //pop.remove o ultimo item de array
        array.pop();
        console.log(array);

    //shift - remove o primerio item do array
        array.shift();
        console.log(array);

    //unshift - add item no inicio do array
        array.unshift('novo item');
        console.log(array);

    //indexOf - retorna o indice de um item do array 
        console.log(array.indexOf(true));
    // splice - remove ou substitui um item por um item por indice
        array.splice(0,2);
        console.log(array);    



