console.group('cuadroado')

const ladoCuadrado = 5;
const perimertroCuadrado= ladoCuadrado*4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;

function calcularCuadrado(lado){
    return{
        perimetro:lado*4,
        area:lado *lado + 'cm2',
    }
}

console.log({
    ladoCuadrado,
    perimertroCuadrado,
    areaCuadrado,
})
console.groupEnd('cuadroado');
console.group('triagulo')
//const alturaEquiacion = Math. sqrt( Math.pow(ladoTringulo1,2) - Math.pow(ladoTringuloBase,2)/4)

const ladoTringulo1= 6;
const ladoTringulo2= 6;
const ladoTringuloBase= 4;
const alturaTringulo = 5.5;
const perimertroTringulo =ladoTringulo1+ladoTringulo2+ladoTringuloBase;
const areaTringulo = (ladoTringuloBase * alturaTringulo) /2;

function calcularTringulo(lado,ladoBase){
    const altura = calcularAlturaTriangulo(lado,ladoBase)
    return{
        perimetro:lado+lado+ladoBase,
        area:(ladoBase*altura)/2,
    }
}
function calcularAlturaTriangulo(lados,base){
    if(lados != base && lados > base){
        return Math.sqrt( (Math.pow(lados,2)) - (Math.pow(base,2))/4);
    }
    else{
        console.warn('Los lados tiene que ser difentes que las base y los lados tiene que se mayores')
    }
}
function calcularAlturaTrianguloEscaleno(lado1, base, lado2){

	const x = (lado2**2 - lado1**2 + base**2) / (2 * base);
	const altura = Math.sqrt(lado2**2 - x**2);

	return altura;
}
console.groupEnd('triagulo')

console.group('circulo')
const radioCirculo= 3;
const diametroCirculo=radioCirculo*2;


const circunFerencia = diametroCirculo*Math.PI;
const areaCirculo = (radioCirculo ** 2)*Math.PI; ;
console.log({
    radioCirculo,
    diametroCirculo,
    circunFerencia,
    areaCirculo, 
})

function calcularCirculo(radio){
    const diametroCirculo=radio * 2;
    const radioAlCuadrado=Math.pow(radio,2);
    return{
        circunFerencia:diametroCirculo*Math.PI,
        areaCirculo: radioAlCuadrado* Math.PI,
    }
}
console.groupEnd('circulo')


