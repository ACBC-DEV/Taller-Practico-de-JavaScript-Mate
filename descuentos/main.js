const inputPrice = document.getElementById('price');
const inputCoupon= document.getElementById('coupon');
const btn = document.getElementById('calculate');
const  pResult=document.getElementById('result')
const descuento=document.getElementById('descuento');
btn.addEventListener('click',calculatePriceWithDiscount);
// const arrayUObeject=undefined;//['cuupones':descuneto]{}

// const couponsObjetc={
//     'tr2':20,
//     'tr3':29,
//     'feyer7':35,
//     '123':50,
// };
const cuponesList=[];
cuponesList.push({
    name:'tr3',
    discont:30,
})
cuponesList.push({
    name:'tr2',
    discont:20,
})
cuponesList.push({
    name:'tr1',
    discont:10,
})

function calculatePriceWithDiscount(){
    // (P* (100 - D))/100
    const price = Number(inputPrice.value);
    let coupon= inputCoupon.value;
    if(!price || !coupon){
        pResult.innerText='llena el formulario perra 😡😡😠';
        return;
    }
    let discont;
    function isCouponInArray(cuponE){
        return cuponE.name==coupon;
    }   
    // const couponArray=cuponesList.filter(isCouponInArray); []
    
    // if (couponArray.length > 0 ){
    //     discont=couponArray[0].discont;
    //     calculoDescuneto(discont);
    // }else{
    //     pResult.innerText=' ';
    //     descuento.innerText='cupon no valido';
    // }
    const couponArray=cuponesList.find(isCouponInArray);//{}
    if (couponArray){
        discont=couponArray.discont;
        calculoDescuneto(discont);
    }else{
        pResult.innerText=' ';
        descuento.innerText='cupon no valido';
    }
    console.log({
    discont,
    couponArray,
    coupon,
    cuponesList
    })
    // with for
    // for(i of cuponesList){
    //     if(i.name ==coupon){
    //         discont=i.discont;
    //         calculoDescuneto(discont);
    //     } else{
    //         descuento.innerText='cupon no valido';
    //     }
    // }




    // with object

    // if(couponsObjetc[coupon]){
    //     discont=Number(couponsObjetc[coupon]);
    //     calculoDescuneto(discont);
    //     descuento.innerText='descuento del '+discont +'%🎈🎉✨';
    // }else{
    //     descuento.innerText='cupon no valido';
    //     pResult.innerText=' ';
    // }
    
    /*if(coupon =='123XVC'){
        calculoDescuneto(10);
        descuento.innerText='descuento del 10%🎈🎉✨';
    }
    else if(coupon =='tr3'){
        calculoDescuneto(20);
        descuento.innerText='descuento del 20% 🎈🎉✨';
    }
    else{
        descuento.innerText='cupon no valido';
    }*/

    function calculoDescuneto(discont){
        const newPrice = (price*(100 - discont))/100;
        descuento.innerText='El cupon es de '+discont+'%';
        pResult.innerText='El valor a pagar es 💲'+newPrice;
    }
        

}