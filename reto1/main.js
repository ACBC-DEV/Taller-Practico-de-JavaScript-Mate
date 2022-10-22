const precio =document.getElementById('precio');
const cupon =document.getElementById('cupon');
const bnt =document.getElementById('bnt');
const rs = document.getElementById('rs');
bnt.addEventListener('click',validar);

function validar() {
    const p=precio.value;
    const c=cupon.value;
    const descunto = (p * ( 100-c ))/100;
    console.log(descunto);
    const resultado=document.createElement('h2');
    document.getElementById('rs').innerHTML='El valor a pagar es : '+descunto;
}