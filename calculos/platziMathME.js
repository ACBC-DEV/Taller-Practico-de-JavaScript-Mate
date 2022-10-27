
// let total=0,numeros = [1, 2, 3, 4, 5,6,7,8,9];
// numeros.forEach(function(a){total += a;});
// total/=numeros.length;
// console.log(numeros.length)
// console.log(total);

// with for i


/*let array=[1,2,56,4,8,465,46]
function calcularPromedio(array){
    let promedio = 0;
    for(let i=0;i<array.length;i++){
        promedio =promedio+ array[i];
    }
    console.log(promedio/array.length)
}
calcularPromedio(array)*/
const PlatziMath={};
// with reduce
PlatziMath.calcularPromedio= function calcularPromedio(array){

    // function sumarTodosElemtos(valorAcumulado,nuevoValor){
    //     return valorAcumulado +=nuevoValor
    // }
    const sumalista=array.reduce((valorAcumulado,nuevoValor)=>valorAcumulado +=nuevoValor );
    const promedio = sumalista/array.length
    return promedio
}
// calcularPromedio([1,2,3,4,5,67,8,9])

PlatziMath.esPar= function esPar(array){
    return (array.length %2 )==0 ;
}
PlatziMath.esImpar= function esImpar(array){
    return (array.length %2 )==1 ;
}
// let array=[12,1,4,5,6,5,9,7,9,19,9]


PlatziMath.calcularMediana= function calcularMediana(listaDesordenada){  
    const lista = PlatziMath.ordenarLista(listaDesordenada);
    const listaEsPar = PlatziMath.esPar(lista);

    if (listaEsPar) {
        const indexMitad1ListaPar = (lista.length / 2) - 1;
        const indexMitad2ListaPar = lista.length / 2;
        const listaMitades = [];
        listaMitades.push(lista[indexMitad1ListaPar]);
        listaMitades.push(lista[indexMitad2ListaPar]);

        const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
        return medianaListaPar;
    } else {
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}
//calcularMediana(array)

PlatziMath.ordenarLista= function ordenarLista(listaDesordenada){
    /*function ordenarListaSort(valorAcumulado,nuevoValor){
        // if(valorAcumulado>nuevoValor){
        //     return 1;
        // }
        // else if(valorAcumulado==nuevoValor){
        //     return 0;
        // }
        // else{
        //     return -1;
        // }
        return valorAcumulado-nuevoValor;
    }*/
    const lista=listaDesordenada.sort((a,b)=>a-b);
    return lista
} 
PlatziMath.ordenarListaBidimesional= function ordenarListaBidimesional(listaDesordenada,i){
    function ordenarListaSort(valorAcumulado,nuevoValor){
        return valorAcumulado[i] - nuevoValor[i]
    }
    const lista=listaDesordenada.sort(ordenarListaSort);
    return lista
} 
PlatziMath.calcularModa= function calcularModa(array){
    const listaCount={}

    for(let i =0;i<array.length;i++){
        const element =array[i];

        if(listaCount[element]){
            listaCount[element]+= 1;
        }else{
            listaCount[element]= 1;
        }
    }
    
    const listaArray=Object.entries(listaCount);
    //console.log({listaCount,listaArray});
    //console.log(array)
    const listOrder= ordenarListaBidimesional(listaArray,1);
    const listOrdenMax =listOrder[listOrder.length -1];
    const listOrdenMaxAnterio =listOrder[listOrder.length -2];
    if(listOrdenMax[1]==listOrdenMaxAnterio[1]){
        console.log('No hay moda ')
    }else{
        console.log('la moda es '+listOrdenMax[0]);
    }
    
    //console.log(listOrder);

}
//calcularModa(array);

// const notes = [
//     {
//         course: "Educación Física",
//         note: 10,
//         credit: 2,
//     },
//     {
//         course: "Programación",
//         note: 8,
//         credit: 5,
//     },
//     {
//         course: "Finanzas personales",
//         note: 7,
//         credit: 5,
//     },
// ];


// const notesWithCredit = notes.map( (noteObject)=>noteObject.note * noteObject.credit);
// const sumOfNotesWithCredit = notesWithCredit.reduce((a=0,b)=>a + b);

// const credits = notes.map(function (noteObject) {
//     return noteObject.credit;
// });

// const sumOfCredits = credits.reduce(
//     function (sum = 0, newVal) {
//         return sum + newVal;
//     }
// );
// const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
// console.log(promedioPonderadoNotasConCreditos)