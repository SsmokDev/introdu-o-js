const a = 32;
const b = 24;
const c = 44;
const d = 89;
const e = '1';

console.log('é igual', d == e);
console.log('é igual', d === e);
console.log('é diferente', d != e);
console.log('é diferente', d !== e);

console.log('c é maior igual que b: ', c >= b);
console.log(' d é menor que b: ', d < b);

console.log('adição:', b + a);
console.log('subtração:', d - a);
console.log('multiplicação:', c * a);
console.log('divisão:', a / c);
console.log('módulo', b % c);

if( c > d ){
    console.log('c é maior');
}else if( b > c){
    console.log('b é maior');
}
else{
    console.log(' d é maior');
}


switch( d ){
    case 65:
        console.log('sessenta e cinco');
        break;
    case 89:
        console.log('oitenta e nove');
        break;
    case 32:
        console.log('trinta e dois');
        break;
    default:
        console.log('numero não encontrado');
}